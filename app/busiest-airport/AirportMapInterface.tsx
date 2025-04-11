'use client'

import { Suspense, useState, useEffect } from 'react'
import { use } from 'react'
import WorldMap from './WorldMap'
import AirportDetails from './AirportDetails'
import { Airport } from './types'
import type { AirportDelays, AirportDelay } from '../../lib/types'
import AirportFlightInfo from './AirportFlightInfo'

interface RawAirport {
  name: string
  iata_code: string
  country_code: string
  reason: string
  elevation: number
  city: string
  state: string
  longitude: number
  latitude: number
  timezone: string
  type: string
  wiki_url: string
  timestamp: number
}

interface AirportMapInterfaceProps {
  airportsData: Record<string, RawAirport>
  airportDelaysPromise: Promise<AirportDelays>
  initialAirportIcao: string
}

export default function AirportMapInterface({
  airportsData,
  airportDelaysPromise,
  initialAirportIcao
}: AirportMapInterfaceProps) {
  // Use the React 'use' hook to unwrap the promise
  const delaysData = use(airportDelaysPromise)

  // Location state
  const [userLocation, setUserLocation] = useState<{
    city: string | undefined
    country: string | undefined
    latitude: string | undefined
    longitude: string | undefined
  } | null>(null)

  // Fetch location data
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch('/api/geo')
        if (!response.ok) {
          throw new Error('Failed to fetch location data')
        }
        const data = await response.json()
        setUserLocation(data)
      } catch (err) {
        console.error('Error fetching location:', err)
      }
    }

    fetchLocation()
  }, [])

  // Transform the airports data and include delay information
  const airports: Airport[] = Object.entries(airportsData).map(([icao, airport]) => {
    // Try to find delay information for this airport
    const airportDelay = delaysData.delays?.find(
      (delay: AirportDelay) => delay.airport === airport.iata_code
    )

    return {
      name: airport.name,
      city: airport.city,
      country_code: airport.country_code,
      iata_code: airport.iata_code,
      icao_code: icao, // Using the key as the ICAO code
      lat: airport.latitude,
      lon: airport.longitude,
      delay_status: airportDelay
        ? {
          color: airportDelay.color as 'red' | 'yellow' | 'green',
          category: airportDelay.category,
          delay_secs: airportDelay.delay_secs
        }
        : {
          color: 'green' as const,
          category: 'no delay',
          delay_secs: 0
        }
    }
  })

  // Find the airport with initialAirportIcao for initial selection
  const initialAirport = airports.find(airport => airport.icao_code === initialAirportIcao) ||
    (airports.length > 0 ? airports[0] : null)

  const [selectedAirport, setSelectedAirport] = useState<Airport | null>(initialAirport)

  // Handle selection from map or details component
  const handleAirportSelect = (airport: Airport) => {
    setSelectedAirport(airport)
  }

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="flex-1 w-full h-full relative p-4 border-b lg:border-b-0 lg:border-r border-foreground flex items-center justify-center">
        <WorldMap
          airports={airports}
          selectedAirport={selectedAirport}
          onAirportSelect={handleAirportSelect}
          className="w-full h-full"
          userLocation={userLocation || undefined}
        />
      </div>
      <div className="lg:w-[400px] h-full flex flex-col">
        <div className="flex flex-col h-full">
          <AirportDetails
            airports={airports}
            selectedAirport={selectedAirport}
            onAirportSelect={handleAirportSelect}
            className="flex-shrink-0 border-b border-foreground"
          />
          <Suspense fallback={<div className="p-4">
            <h4 className="font-medium mb-2">Flights</h4>
            <div className="overflow-x-auto border border-foreground">
              <div className="flex flex-col max-h-[300px]">
                <div className="flex justify-between bg-gray-50 px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <span>Flight</span>
                  <span>Origin/Destination</span>
                  <span>Time</span>
                  <span>Status</span>
                </div>
                <div className="bg-white divide-y divide-gray-200">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="flex justify-between px-6 py-4 whitespace-nowrap">
                      <span className="h-4 w-16 bg-gray-200 animate-pulse rounded"></span>
                      <span className="h-4 w-24 bg-gray-200 animate-pulse rounded"></span>
                      <span className="h-4 w-16 bg-gray-200 animate-pulse rounded"></span>
                      <span className="h-4 w-20 bg-gray-200 animate-pulse rounded"></span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>}>
            <AirportFlightInfo
              icaoCode={selectedAirport?.icao_code || null}
              className="flex-1 overflow-y-auto"
            />
          </Suspense>
        </div>
      </div>
    </div>
  )
} 