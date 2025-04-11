/**
 * Client-side utility for fetching airport flight data from our API
 */

import type { AirportFlights } from '../actions/airport-data'

/**
 * Response type from our API endpoint
 */
export type ApiFlightResponse = {
  timestamp: number
  data: AirportFlights
}

/**
 * Get the base URL depending on environment
 * @returns The base URL for API requests
 */
function getBaseUrl(): string {
  // Check if we're in a browser environment
  if (typeof window !== 'undefined') {
    // Use window.location.origin for client-side rendering
    return window.location.origin
  }
  
  // For server-side rendering, use environment variable or default
  return process.env.NODE_ENV === 'production' 
    ? 'https://flight-stat.vercel.app' 
    : 'http://localhost:3000'
}

/**
 * Fetch airport flight data from the server-side API endpoint
 * @param icaoCode ICAO code of the airport
 * @returns A tuple with error flag and data
 */
export async function fetchAirportFlights(
  icaoCode: string
): Promise<[boolean, AirportFlights | null, number]> {
  try {
    // Get the base URL
    const baseUrl = getBaseUrl()
    
    // Construct the API URL with the ICAO code
    const url = `${baseUrl}/api/airport-flights?icao=${encodeURIComponent(icaoCode)}`
    
    // Fetch data from our API endpoint
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 }, // Cache for 60 seconds
    })

    // Check if response was successful
    if (!response.ok) {
      const errorData = await response.json()
      console.error('API response error:', errorData)
      return [true, null, Date.now()]
    }

    // Parse the successful response
    const { data, timestamp }: ApiFlightResponse = await response.json()
    return [false, data, timestamp]
  } catch (error) {
    console.error('Error fetching flight data:', error)
    return [true, null, Date.now()]
  }
} 