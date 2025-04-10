'use client'

import { useEffect, useRef } from 'react'

// Import Mollweide GeoJSON directly
import geoJsonData from '@/public/ne_110m_land/mollweide.geo.json'

interface Airport {
  lat: number
  lon: number
  iata_code: string
  delay_status?: {
    color: 'red' | 'yellow' | 'green'
    category: string
    delay_secs: number
  } | null
}

interface WorldMapProps {
  airports: Airport[]
  width?: number
  height?: number
  backgroundColor?: string
  landOutlineColor?: string
  landFillColor?: string
  airportColor?: string
  gridLines?: boolean
}

// GeoJSON types
interface GeoJSONFeature {
  type: string
  geometry: {
    type: string
    coordinates: number[][][]
  }
  properties?: Record<string, unknown>
}

interface GeoJSONData {
  type: string
  features: GeoJSONFeature[]
}

// Helper functions outside component to avoid dependencies
const extractCoordinates = (geometry: { type: string; coordinates: number[][][] | number[][][][]}): number[][][] => {
  if (geometry.type === 'Polygon') return geometry.coordinates as number[][][]
  if (geometry.type === 'MultiPolygon') return (geometry.coordinates as number[][][][]).flat()
  return []
}

// Find coordinate range in the Mollweide GeoJSON to use for scaling
const calculateBounds = () => {
  let minX = Infinity
  let minY = Infinity
  let maxX = -Infinity
  let maxY = -Infinity

  const typedGeoJsonData = geoJsonData as unknown as GeoJSONData
  
  typedGeoJsonData.features.forEach((feature) => {
    const coordsList = extractCoordinates(feature.geometry)
    coordsList.forEach(ring => {
      ring.forEach(([x, y]) => {
        if (x < minX) minX = x
        if (x > maxX) maxX = x
        if (y < minY) minY = y
        if (y > maxY) maxY = y
      })
    })
  })

  return { minX, maxX, minY, maxY }
}

// Precompute bounds outside component - it's static data
const BOUNDS = calculateBounds()

const WorldMap = ({
  airports,
  width = 2000,
  height = 1000,
  backgroundColor = '#00000000',
  landOutlineColor = '#000000',
  landFillColor = '#ffffff',
  airportColor = '#6a7282', 
  gridLines = true
}: WorldMapProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  // Map adjustment parameters
  const horizontalOffset = 0
  const verticalOffset = 3.4 // Extract the vertical offset into a configurable variable
  
  // Convert lat/lon to Mollweide projection coordinates
  // Using the formula from Wikipedia
  const latLonToProjected = (lat: number, lon: number, centralMeridian = 0): [number, number] => {
    // Convert to radians
    const latRad = (lat * Math.PI) / 180
    const lonRad = ((lon - centralMeridian) * Math.PI) / 180
    
    // Special case for poles to avoid division by zero
    if (Math.abs(lat) === 90) {
      const theta = lat > 0 ? Math.PI / 2 : -Math.PI / 2
      const x = 0
      const y = Math.sqrt(2) * Math.sin(theta)
      return [x, y]
    }
    
    // Start with initial guess for theta (parametric latitude)
    let theta = latRad
    
    // Iteratively solve the Mollweide equation using improved Newton-Raphson formula
    // 2θ + sin(2θ) = π·sin(φ)
    const MAX_ITERATIONS = 10
    for (let i = 0; i < MAX_ITERATIONS; i++) {
      // Using the numerically stable version of the formula from the Wikipedia notes
      theta = theta - (2 * theta + Math.sin(2 * theta) - Math.PI * Math.sin(latRad)) / 
              (4 * Math.cos(theta) * Math.cos(theta))
    }
    
    // Calculate x and y using the formula from Wikipedia
    const x = (2 * Math.sqrt(2) / Math.PI) * lonRad * Math.cos(theta)
    const y = Math.sqrt(2) * Math.sin(theta)
    
    return [x, y]
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Clear canvas with specified background
    ctx.fillStyle = backgroundColor
    ctx.fillRect(0, 0, width, height)
    
    // Center the map horizontally
    const offsetX = width / 2
    // Adjust the vertical center to move the map down slightly
    const offsetY = height / 2
    
    // For Mollweide projection, the ideal width:height ratio is 2:1
    // Set the ellipse width to 100% of the canvas width
    const ellipseWidth = width
    
    // Calculate ellipse height based on the 2:1 ratio of Mollweide
    const ellipseHeight = ellipseWidth / 2
    
    // Calculate scale based on the ellipse width
    // The theoretical width of Mollweide is 4*sqrt(2), so we scale accordingly
    const scale = ellipseWidth / (4 * Math.sqrt(2))
    
    // Project coordinates to screen space
    const projectPoint = ([x, y]: [number, number]): [number, number] => {
      return [x * scale + offsetX, -y * scale + offsetY]
    }
    
    // Draw the elliptical boundary of the projection (2:1 ratio)
    ctx.beginPath()
    ctx.strokeStyle = '#000000'
    ctx.lineWidth = 1.5
    
    // Draw ellipse
    ctx.ellipse(offsetX, offsetY, ellipseWidth / 2, ellipseHeight / 2, 0, 0, 2 * Math.PI)
    ctx.stroke()
    
    // Draw grid lines if requested
    if (gridLines) {
      ctx.strokeStyle = '#000000'
      ctx.lineWidth = 1
      
      // Draw meridians (lines of longitude)
      for (let lon = -180; lon <= 180; lon += 30) {
        ctx.beginPath()
        for (let lat = -89; lat <= 89; lat += 1) {
          const [projX, projY] = latLonToProjected(lat, lon)
          const [px, py] = projectPoint([projX, projY])
          
          if (lat === -89) ctx.moveTo(px, py)
          else ctx.lineTo(px, py)
        }
        ctx.stroke()
      }
      
      // Draw parallels (lines of latitude)
      for (let lat = -60; lat <= 60; lat += 30) {
        ctx.beginPath()
        for (let lon = -180; lon <= 180; lon += 1) {
          const [projX, projY] = latLonToProjected(lat, lon)
          const [px, py] = projectPoint([projX, projY])
          
          if (lon === -180) ctx.moveTo(px, py)
          else ctx.lineTo(px, py)
        }
        ctx.stroke()
      }
    }
    
    // Draw land outlines
    ctx.strokeStyle = landOutlineColor
    ctx.fillStyle = landFillColor
    ctx.lineWidth = 1
    
    const typedGeoJsonData = geoJsonData as unknown as GeoJSONData
    
    // Calculate the appropriate scale factor for the GeoJSON data
    const geoJsonRangeX = BOUNDS.maxX - BOUNDS.minX
    const geoJsonRangeY = BOUNDS.maxY - BOUNDS.minY
    
    // The ideal range for Mollweide projection is from -2√2 to 2√2 for x and -√2 to √2 for y
    // const idealRangeX = 4 * Math.sqrt(2)
    // const idealRangeY = 2 * Math.sqrt(2)
    
    // Output values to console for direct configuration
    // console.log('Map scaling values:', {
    //   bounds: BOUNDS,
    //   geoJsonRangeX,
    //   geoJsonRangeY,
    //   idealRangeX,
    //   idealRangeY,
    //   width,
    //   height,
    //   offsetX,
    //   offsetY,
    //   ellipseWidth,
    //   ellipseHeight,
    //   scale
    // });
    
    // Hard-coded scaling factor from console output
    // Original calculation:
    // const xFactor = idealRangeX / geoJsonRangeX * 0.98
    // const yFactor = idealRangeY / geoJsonRangeY * 0.98
    // const dataScaleFactor = Math.min(xFactor, yFactor)
    
    // Using hard-coded value from console output
    const dataScaleFactor = 1.56e-7;
    
    // console.log('Calculated factors:', { xFactor, yFactor, dataScaleFactor });
    
    typedGeoJsonData.features.forEach((feature) => {
      const coordsList = extractCoordinates(feature.geometry)
      
      coordsList.forEach(ring => {
        ctx.beginPath()
        
        ring.forEach(([x, y], i) => {
          // Normalize to center of bounds
          const normalizedX = x - (BOUNDS.minX + geoJsonRangeX / 2)
          const normalizedY = y - (BOUNDS.minY + geoJsonRangeY / 2)
          
          // Scale to match the elliptical boundary
          const scaledX = normalizedX * dataScaleFactor
          const scaledY = normalizedY * dataScaleFactor
          
          const [projX, projY] = projectPoint([scaledX, scaledY])

          const [px, py] = [projX + horizontalOffset, projY + verticalOffset]
          
          if (i === 0) ctx.moveTo(px, py)
          else ctx.lineTo(px, py)
        })
        
        ctx.closePath()
        ctx.fill()
        ctx.stroke()
      })
    })
    
    // Draw airports with color based on delay status
    airports.forEach((airport) => {
      const [projX, projY] = latLonToProjected(airport.lat, airport.lon)
      const [px, py] = projectPoint([projX, projY])
      
      // Check if the airport is within the elliptical boundary
      const normalizedX = (px - offsetX) / (ellipseWidth / 2)
      const normalizedY = (py - offsetY) / (ellipseHeight / 2)
      
      if (normalizedX * normalizedX + normalizedY * normalizedY <= 1) {
        // Set color based on delay status
        if (airport.delay_status) {
          switch (airport.delay_status.color) {
            case 'red':
              ctx.fillStyle = '#FF0000' // Red
              break
            case 'yellow':
              ctx.fillStyle = '#FFCC00' // Yellow
              break
            case 'green':
              ctx.fillStyle = '#00CC00' // Green
              break
            default:
              ctx.fillStyle = airportColor
          }
        } else {
          ctx.fillStyle = airportColor
        }
        
        ctx.beginPath()
        ctx.arc(px, py, 4, 0, Math.PI * 2)
        ctx.fill()
        
        // Add a small white outline
        ctx.strokeStyle = '#ffffff'
        ctx.lineWidth = 0.5
        ctx.stroke()
      }
    })
    
    // // Draw equator line
    // ctx.beginPath()
    // ctx.strokeStyle = '#888888'
    // ctx.lineWidth = 1
    // ctx.setLineDash([5, 5])
    // const equatorLeftX = offsetX - ellipseWidth / 2
    // const equatorRightX = offsetX + ellipseWidth / 2
    // ctx.moveTo(equatorLeftX, offsetY)
    // ctx.lineTo(equatorRightX, offsetY)
    // ctx.stroke()
    // ctx.setLineDash([])
    
    // // Draw central meridian
    // ctx.beginPath()
    // ctx.strokeStyle = '#888888'
    // ctx.lineWidth = 1
    // ctx.setLineDash([5, 5])
    // const meridianTopY = offsetY - ellipseHeight / 2
    // const meridianBottomY = offsetY + ellipseHeight / 2
    // ctx.moveTo(offsetX, meridianTopY)
    // ctx.lineTo(offsetX, meridianBottomY)
    // ctx.stroke()
    // ctx.setLineDash([])
    
  }, [airports, width, height, backgroundColor, landOutlineColor, landFillColor, airportColor, gridLines])

  return (
    <div className="relative flex items-center justify-center">
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="border-0 rounded-none dark:invert"
        style={{ maxWidth: '100%', height: 'auto' }}
        aria-label="Mollweide projection world map"
        tabIndex={0}
      />
    </div>
  )
}

export default WorldMap 