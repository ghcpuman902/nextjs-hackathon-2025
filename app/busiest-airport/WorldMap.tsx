'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import geoJsonData from './mollweide.geo.json'
import routesData from './routes.json'
import './WorldMap.css'
import { Airport } from './types'

interface WorldMapProps {
  airports: Airport[]
  className?: string
  onAirportSelect?: (airport: Airport) => void
  selectedAirport?: Airport | null
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

// Convert lat/lon to Mollweide projection coordinates
const latLonToProjected = (lat: number, lon: number, centralMeridian = 0): [number, number] => {
  const latRad = (lat * Math.PI) / 180
  const lonRad = ((lon - centralMeridian) * Math.PI) / 180
  
  if (Math.abs(lat) === 90) {
    const theta = lat > 0 ? Math.PI / 2 : -Math.PI / 2
    const x = 0
    const y = Math.sqrt(2) * Math.sin(theta)
    return [x, y]
  }
  
  let theta = latRad
  const MAX_ITERATIONS = 10
  for (let i = 0; i < MAX_ITERATIONS; i++) {
    theta = theta - (2 * theta + Math.sin(2 * theta) - Math.PI * Math.sin(latRad)) / 
            (4 * Math.cos(theta) * Math.cos(theta))
  }
  
  const x = (2 * Math.sqrt(2) / Math.PI) * lonRad * Math.cos(theta)
  const y = Math.sqrt(2) * Math.sin(theta)
  
  return [x, y]
}

// Helper to draw a great circle line between two points in the Mollweide projection
const drawGreatCircleLine = (
  start: Airport,
  end: Airport,
  segments = 100
): [number, number][] => {
  const points: [number, number][] = []

  // Convert degrees to radians
  const startLat = (start.lat * Math.PI) / 180
  const startLon = (start.lon * Math.PI) / 180
  const endLat = (end.lat * Math.PI) / 180
  const endLon = (end.lon * Math.PI) / 180

  // Generate points along the great circle
  for (let i = 0; i <= segments; i++) {
    const fraction = i / segments
    
    // Interpolate along the great circle
    const A = Math.sin((1 - fraction) * Math.PI) / Math.sin(Math.PI)
    const B = Math.sin(fraction * Math.PI) / Math.sin(Math.PI)
    
    const x = A * Math.cos(startLat) * Math.cos(startLon) + B * Math.cos(endLat) * Math.cos(endLon)
    const y = A * Math.cos(startLat) * Math.sin(startLon) + B * Math.cos(endLat) * Math.sin(endLon)
    const z = A * Math.sin(startLat) + B * Math.sin(endLat)
    
    // Convert back to lat/lon
    const lat = Math.atan2(z, Math.sqrt(x * x + y * y)) * 180 / Math.PI
    const lon = Math.atan2(y, x) * 180 / Math.PI
    
    // Project to Mollweide
    const projectedPoint = latLonToProjected(lat, lon)
    points.push(projectedPoint)
  }
  
  return points
}

const WorldMap = ({
  airports = [],
  className = '',
  onAirportSelect,
  selectedAirport = null,
}: WorldMapProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const [dimensions, setDimensions] = useState({ width: 100, height: 100 })
  const [localSelectedAirport, setLocalSelectedAirport] = useState<Airport | null>(selectedAirport)
  
  // Update local state when prop changes
  useEffect(() => {
    setLocalSelectedAirport(selectedAirport)
  }, [selectedAirport])

  // Map adjustment parameters
  const horizontalOffset = 0
  const verticalOffset = 3.4
  
  // Border stroke width - added to handle proper sizing
  const strokeWidth = 1
  
  // Project coordinates to screen space
  const projectPoint = ([x, y]: [number, number], scale: number, offsetX: number, offsetY: number): [number, number] => {
    return [x * scale + offsetX, -y * scale + offsetY]
  }

  // Handle resize to maintain responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth
        const height = containerRef.current.clientHeight
        setDimensions({ width, height })
      }
    }
    
    // Initial size calculation
    handleResize()
    
    // Set up resize listener
    window.addEventListener('resize', handleResize)
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Handle airport selection - wrapped in useCallback to prevent recreation on every render
  const handleAirportClick = useCallback((airport: Airport) => {
    setLocalSelectedAirport(airport)
    if (onAirportSelect) {
      onAirportSelect(airport)
    }
  }, [onAirportSelect])

  useEffect(() => {
    if (!svgRef.current || dimensions.width === 0) return

    const svg = svgRef.current
    const { width, height } = dimensions
    const offsetX = width / 2
    const offsetY = height / 2
    const ellipseWidth = width - strokeWidth
    const ellipseHeight = ellipseWidth / 2
    const scale = ellipseWidth / (4 * Math.sqrt(2))
    const dataScaleFactor = 1.56e-7

    // Clear existing content
    svg.innerHTML = ''

    // Create SVG group for the map
    const mapGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g')
    mapGroup.setAttribute('class', 'map-group')
    svg.appendChild(mapGroup)

    // Create a clip path for the elliptical boundary
    const clipPath = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath')
    clipPath.setAttribute('id', 'map-boundary-clip')
    svg.appendChild(clipPath)
    
    const clipEllipse = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse')
    clipEllipse.setAttribute('cx', offsetX.toString())
    clipEllipse.setAttribute('cy', offsetY.toString())
    clipEllipse.setAttribute('rx', ((ellipseWidth / 2) - strokeWidth/2).toString())
    clipEllipse.setAttribute('ry', ((ellipseHeight / 2) - strokeWidth/2).toString())
    clipPath.appendChild(clipEllipse)

    // Draw the elliptical boundary
    const boundary = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse')
    boundary.setAttribute('cx', offsetX.toString())
    boundary.setAttribute('cy', offsetY.toString())
    boundary.setAttribute('rx', (ellipseWidth / 2).toString())
    boundary.setAttribute('ry', (ellipseHeight / 2).toString())
    boundary.setAttribute('class', 'map-boundary')
    boundary.setAttribute('stroke-width', '1')
    mapGroup.appendChild(boundary)

    // Create a group for map content that will be clipped
    const contentGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g')
    contentGroup.setAttribute('clip-path', 'url(#map-boundary-clip)')
    mapGroup.appendChild(contentGroup)

    // Draw grid lines
    const gridGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g')
    gridGroup.setAttribute('class', 'grid-lines')
    contentGroup.appendChild(gridGroup)

    // Draw meridians (longitude lines)
    for (let lon = -180; lon <= 180; lon += 30) {
      // Skip the extremes
      if (lon === -180 || lon === 180) continue;
      
      const points = [];
      
      // Generate more points for smoother curves
      for (let lat = -89.5; lat <= 89.5; lat += 1) {
        const [projX, projY] = latLonToProjected(lat, lon)
        const [px, py] = projectPoint([projX, projY], scale, offsetX, offsetY)
        
        // Only add points within the elliptical boundary
        const normalizedX = (px - offsetX) / (ellipseWidth / 2)
        const normalizedY = (py - offsetY) / (ellipseHeight / 2)
        
        if (normalizedX * normalizedX + normalizedY * normalizedY <= 1) {
          points.push([px, py])
        }
      }
      
      if (points.length > 1) {
        // Use polyline instead of path for grid lines
        const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline')
        const pointsAttr = points.map(([x, y]) => `${x},${y}`).join(' ')
        polyline.setAttribute('points', pointsAttr)
        polyline.setAttribute('class', 'meridian')
        polyline.setAttribute('stroke-width', '1')
        gridGroup.appendChild(polyline)
      }
    }

    // Draw parallels (latitude lines)
    for (let lat = -60; lat <= 60; lat += 30) {
      // For parallels, we'll calculate where the latitude line intersects the ellipse
      // and make sure it goes from edge to edge
      
      // First generate points to find the curve
      const curvePoints: [number, number][] = [];
      for (let lon = -179; lon <= 179; lon += 3) {
        const [projX, projY] = latLonToProjected(lat, lon)
        const [px, py] = projectPoint([projX, projY], scale, offsetX, offsetY)
        
        // Only calculate points within the elliptical boundary for the curve
        const normalizedX = (px - offsetX) / (ellipseWidth / 2)
        const normalizedY = (py - offsetY) / (ellipseHeight / 2)
        
        if (normalizedX * normalizedX + normalizedY * normalizedY <= 1) {
          curvePoints.push([px, py])
        }
      }
      
      if (curvePoints.length > 1) {
        // Now find where this curve should intersect the ellipse boundary
        // For each parallel, find the leftmost and rightmost intersections with the ellipse
        
        // First find the y-position where this latitude would appear on the map
        const [, centerY] = projectPoint([0, latLonToProjected(lat, 0)[1]], scale, offsetX, offsetY)
        
        // Function to find the intersection of the parallel with the ellipse
        const findIntersection = (fromLeft: boolean): [number, number] => {
          const a = ellipseWidth / 2
          const b = ellipseHeight / 2
          const y0 = centerY - offsetY
          
          // If y0 is outside the ellipse's vertical range, return null
          if (Math.abs(y0) > b) {
            // Fall back to a point on the curve if no intersection
            return fromLeft ? curvePoints[0] : curvePoints[curvePoints.length - 1]
          }
          
          // Calculate the x-coordinate where the horizontal line at y0 intersects the ellipse
          const x0 = a * Math.sqrt(1 - (y0 * y0) / (b * b))
          
          return fromLeft ? [offsetX - x0, centerY] : [offsetX + x0, centerY]
        }
        
        // Get the left and right intersection points
        const leftPoint = findIntersection(true)
        const rightPoint = findIntersection(false)
        
        // Combine the points to create a complete line
        const finalPoints = [leftPoint, ...curvePoints, rightPoint]
        
        // Draw the parallel line
        const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline')
        const pointsAttr = finalPoints.map(([x, y]) => `${x},${y}`).join(' ')
        polyline.setAttribute('points', pointsAttr)
        polyline.setAttribute('class', 'parallel')
        polyline.setAttribute('stroke-width', '1')
        gridGroup.appendChild(polyline)
      }
    }

    // Draw land outlines
    const landGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g')
    landGroup.setAttribute('class', 'land-outlines')
    contentGroup.appendChild(landGroup)

    const typedGeoJsonData = geoJsonData as unknown as GeoJSONData
    const geoJsonRangeX = BOUNDS.maxX - BOUNDS.minX
    const geoJsonRangeY = BOUNDS.maxY - BOUNDS.minY

    typedGeoJsonData.features.forEach((feature) => {
      const coordsList = extractCoordinates(feature.geometry)
      coordsList.forEach(ring => {
        if (ring.length < 3) return; // Skip invalid polygons
        
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
        const points = ring.map(([x, y]) => {
          const normalizedX = x - (BOUNDS.minX + geoJsonRangeX / 2)
          const normalizedY = y - (BOUNDS.minY + geoJsonRangeY / 2)
          const scaledX = normalizedX * dataScaleFactor
          const scaledY = normalizedY * dataScaleFactor * 1.02
          return [scaledX, scaledY]
        })
        
        // Create a proper SVG path with area
        let pathData = `M ${points[0][0] * scale + offsetX + horizontalOffset} ${-points[0][1] * scale + offsetY + verticalOffset} `;
        for (let i = 1; i < points.length; i++) {
          pathData += `L ${points[i][0] * scale + offsetX + horizontalOffset} ${-points[i][1] * scale + offsetY + verticalOffset} `;
        }
        pathData += 'Z'; // Close the path
        
        path.setAttribute('d', pathData)
        path.setAttribute('class', 'land')
        path.setAttribute('stroke-width', '1')
        landGroup.appendChild(path)
      })
    })

    // Draw flight routes between all airport pairs from routes.json
    const routesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g')
    routesGroup.setAttribute('class', 'flight-routes')
    contentGroup.appendChild(routesGroup)

    // Create a map of ICAO codes to airport objects for quick lookup
    const airportMap = new Map(airports.map(airport => [airport.icao_code, airport]))

    // Draw routes for each pair in routes.json
    routesData.routes.forEach(([startIcao, endIcao]) => {
      const startAirport = airportMap.get(startIcao)
      const endAirport = airportMap.get(endIcao)

      if (!startAirport || !endAirport) return

      // Get projected points along the great circle
      const pathPoints = drawGreatCircleLine(startAirport, endAirport)
      
      // Only draw path if there are enough points
      if (pathPoints.length > 1) {
        // Create path for the flight route
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
        
        // Build path data from points
        let pathData = ""
        let segmentStart = 0
        
        // We need to handle the path potentially crossing the edge of the map
        while (segmentStart < pathPoints.length - 1) {
          let segmentEnd = pathPoints.length - 1
          
          // Find where the path might cross the edge of the projection
          for (let i = segmentStart + 1; i < pathPoints.length; i++) {
            const [x1, ] = pathPoints[i - 1]
            const [x2, ] = pathPoints[i]
            
            // If there's a large jump in x coordinate, it's probably crossing the edge
            if (Math.abs(x2 - x1) > 0.5) {
              segmentEnd = i - 1
              break
            }
          }
          
          // Create path segment
          let segmentData = ""
          for (let i = segmentStart; i <= segmentEnd; i++) {
            const [projX, projY] = pathPoints[i]
            const [px, py] = projectPoint([projX, projY], scale, offsetX, offsetY)
            
            // Only include points within the elliptical boundary
            const normalizedX = (px - offsetX) / (ellipseWidth / 2)
            const normalizedY = (py - offsetY) / (ellipseHeight / 2)
            
            if (normalizedX * normalizedX + normalizedY * normalizedY <= 1) {
              if (segmentData === "") {
                segmentData = `M ${px} ${py}`
              } else {
                segmentData += ` L ${px} ${py}`
              }
            }
          }
          
          // Add this segment to the overall path
          if (segmentData !== "") {
            pathData += (pathData ? " " : "") + segmentData
          }
          
          // Move to the next segment start
          segmentStart = segmentEnd + 1
        }
        
        path.setAttribute('d', pathData)
        path.setAttribute('class', 'flight-route')
        path.setAttribute('stroke-width', '1')
        routesGroup.appendChild(path)
      }
    })

    // Draw airports
    const airportGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g')
    airportGroup.setAttribute('class', 'airports')
    contentGroup.appendChild(airportGroup)

    // Create a highlighted airport group that will be drawn last (on top)
    const highlightedAirportGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g')
    highlightedAirportGroup.setAttribute('class', 'highlighted-airports')
    contentGroup.appendChild(highlightedAirportGroup)

    // Draw all airports
    airports.forEach((airport) => {
      const [projX, projY] = latLonToProjected(airport.lat, airport.lon)
      const [px, py] = projectPoint([projX, projY], scale, offsetX, offsetY)

      // Check if airport is within the elliptical boundary
      const normalizedX = (px - offsetX) / (ellipseWidth / 2)
      const normalizedY = (py - offsetY) / (ellipseHeight / 2)

      if (normalizedX * normalizedX + normalizedY * normalizedY <= 1) {
        const isSelected = localSelectedAirport?.icao_code === airport.icao_code
        const targetGroup = isSelected ? highlightedAirportGroup : airportGroup
        
        // Create airport marker
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
        circle.setAttribute('cx', px.toString())
        circle.setAttribute('cy', py.toString())
        
        // Use a relative radius based on the map size for better responsiveness
        const baseRadius = Math.max(3, Math.min(4, width / 500))
        const radius = isSelected ? (baseRadius * 1.5).toString() : baseRadius.toString()
        
        circle.setAttribute('r', radius)
        circle.setAttribute('class', `airport ${airport.delay_status ? `delay-${airport.delay_status.color}` : ''} ${isSelected ? 'selected' : ''}`)
        
        // Add title for accessibility
        const title = document.createElementNS('http://www.w3.org/2000/svg', 'title')
        title.textContent = `${airport.name} (${airport.iata_code})`
        circle.appendChild(title)
        
        // Add click event handler
        circle.addEventListener('click', () => handleAirportClick(airport))
        circle.setAttribute('tabindex', '0')
        circle.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleAirportClick(airport)
          }
        })
        
        // Add cursor style to indicate clickability
        circle.style.cursor = 'pointer'
        
        // If selected, add a label for the selected airport
        if (isSelected) {
          const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
          text.setAttribute('x', (px + baseRadius * 2).toString())
          text.setAttribute('y', (py - baseRadius).toString())
          text.textContent = `${airport.iata_code}`
          text.setAttribute('class', 'airport-label')
          text.setAttribute('font-size', '10')
          text.setAttribute('fill', 'white')
          text.setAttribute('stroke', 'black')
          text.setAttribute('stroke-width', '0.5')
          targetGroup.appendChild(text)
        }
        
        targetGroup.appendChild(circle)
      }
    })

  }, [airports, dimensions, localSelectedAirport, handleAirportClick])

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      <svg
        ref={svgRef}
        width="100%"
        height={dimensions.height}
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        preserveAspectRatio="xMidYMid meet"
        className="border-0 rounded-none transition-colors duration-300"
        aria-label="Mollweide projection world map"
      />
    </div>
  )
}

export default WorldMap 