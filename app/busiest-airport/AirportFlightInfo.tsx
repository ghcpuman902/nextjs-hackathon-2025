'use client'

import { useState, useEffect } from 'react'
import { type FlightData } from '../actions/airport-data'
import { fetchAirportFlights } from '../lib/flight-client'

// Define the actual API response structure
interface ApiResponse {
  flights: FlightData[];
  links: {
    next?: string;
  };
  num_pages: number;
}

// Cache for flight data
const flightDataCache = new Map<string, Promise<[boolean, ApiResponse | null, number]>>()

export default function AirportFlightInfo({ icaoCode, className }: { icaoCode: string | null, className?: string }) {
  const [flightData, setFlightData] = useState<{
    error: boolean;
    flights: ApiResponse | null;
    timestamp: number;
  } | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!icaoCode) return

    const fetchData = async () => {
      setIsLoading(true)
      
      try {
        // Check if we have valid cached data
        if (flightDataCache.has(icaoCode)) {
          const [error, flights, timestamp] = await flightDataCache.get(icaoCode)!
          console.log('From cache:', { error, flights, timestamp })
          
          // Only use cache if it has valid flight data
          if (!error && flights && flights.flights && flights.flights.length > 0) {
            setFlightData({ error, flights, timestamp })
            setIsLoading(false)
            return
          }
        }
        
        // No valid cache, fetch new data
        const result = await fetchAirportFlights(icaoCode)
        const [error, flights, timestamp] = result as [boolean, ApiResponse | null, number]
        console.log('Fetched new data:', { error, flights, timestamp })
        
        // Only cache if we have valid flight data
        if (!error && flights && flights.flights && flights.flights.length > 0) {
          flightDataCache.set(icaoCode, Promise.resolve([error, flights, timestamp]))
        }
        
        setFlightData({ error, flights, timestamp })
      } catch (error) {
        console.error('Error fetching flight data:', error)
        setFlightData({ error: true, flights: null, timestamp: Date.now() })
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [icaoCode])

  if (!icaoCode) {
    return (
      <div className="p-4">
        <p className="text-center text-muted-foreground">Select an airport to view flight information</p>
      </div>
    )
  }

  if (isLoading || !flightData) {
    return (
      <div className="p-4">
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
      </div>
    )
  }

  if (flightData.error || !flightData.flights) {
    return (
      <div className="p-4">
        <h4 className="font-medium mb-2">Flights</h4>
        <div className="overflow-x-auto border border-foreground">
          <div className="flex flex-col max-h-[300px]">
            <div className="flex justify-between bg-gray-50 px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              <span>Flight</span>
              <span>Origin/Destination</span>
              <span>Time</span>
              <span>Status</span>
            </div>
            <div className="bg-white divide-y divide-gray-200 p-4">
              <div className="text-sm text-red-600">
                Error loading flight data. Please try again.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Format flight times for display
  const formatTime = (timeString: string | null) => {
    if (!timeString) return 'N/A'
    const date = new Date(timeString)
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  const { flights, timestamp } = flightData
  
  // Debug data being rendered
  console.log('Rendering flight data:', {
    hasFlights: !!flights.flights,
    flightsLength: flights.flights?.length
  })

  // Check if there are flights to display
  const flightsList = flights.flights || []
  
  return (
    <div className={`p-4 ${className}`}>
        
        {/* Flights Section */}
        <div>
          <h4 className="font-medium mb-2">Flights</h4>
          {flightsList.length > 0 ? (
            <div className="overflow-x-auto border border-foreground">
              <div className="flex flex-col max-h-[300px] overflow-y-auto">
                <div className="flex justify-between bg-gray-50 px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <span>Flight</span>
                  <span>Origin/Destination</span>
                  <span>Time</span>
                  <span>Status</span>
                </div>
                <div className="bg-white divide-y divide-gray-200">
                  {flightsList.slice(0, 10).map((flight: FlightData) => (
                    <div key={flight.fa_flight_id || String(Math.random())} className="flex justify-between px-6 py-4 whitespace-nowrap">
                      <span>{flight.ident_iata || flight.ident || flight.flight_number || 'N/A'}</span>
                      <span>
                        {flight.origin?.city || flight.origin?.code || 
                         flight.destination?.city || flight.destination?.code || 'N/A'}
                      </span>
                      <span>
                        {formatTime(flight.scheduled_on || flight.scheduled_off)}
                      </span>
                      <span>{flight.status || 'N/A'}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">No flight data available</p>
          )}
        </div>
      
      <div className="mt-4 text-xs text-muted-foreground text-right">
        Last updated: {new Date(timestamp).toLocaleString()}
      </div>
    </div>
  )
} 