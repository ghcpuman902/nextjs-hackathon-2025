"use server"

import { cache } from "react"
import { fetchFromFlightAware } from "../../lib/fetch"
import { getCachedAirport, getCachedDelays, writeCache, writeDelaysCache } from "../../lib/file-utils"
import type { AirportDelays, AirportDelay, CachedAirportDetails } from "../../lib/types"

export type AirportDetails = {
  airport_code: string
  code_icao: string | null
  code_iata: string | null
  code_lid: string | null
  name: string
  type: string | null
  elevation: number
  city: string
  state: string
  longitude: number
  latitude: number
  timezone: string
  country_code: string
  wiki_url: string | null
  airport_flights_url: string
  alternatives: Array<{
    airport_code: string
    code_icao: string | null
    code_iata: string | null
    code_lid: string | null
    name: string
    type: string | null
    elevation: number
    city: string
    state: string
    longitude: number
    latitude: number
    timezone: string
    country_code: string
    wiki_url: string | null
    airport_flights_url: string
  }>
}

export type AirportFlights = {
  links: {
    next?: string
  }
  num_pages: number
  scheduled_arrivals: Array<FlightData>
  scheduled_departures: Array<FlightData>
  arrivals: Array<FlightData>
  departures: Array<FlightData>
}

export type FlightData = {
  ident: string
  ident_icao: string | null
  ident_iata: string | null
  actual_runway_off: string | null
  actual_runway_on: string | null
  fa_flight_id: string
  operator: string | null
  operator_icao: string | null
  operator_iata: string | null
  flight_number: string | null
  registration: string | null
  atc_ident: string | null
  inbound_fa_flight_id: string | null
  codeshares: string[]
  codeshares_iata?: string[]
  blocked: boolean
  diverted: boolean
  cancelled: boolean
  position_only: boolean
  origin: {
    code: string | null
    code_icao: string | null
    code_iata: string | null
    code_lid: string | null
    timezone: string | null
    name: string | null
    city: string | null
    airport_info_url: string | null
  }
  destination: {
    code: string | null
    code_icao: string | null
    code_iata: string | null
    code_lid: string | null
    timezone: string | null
    name: string | null
    city: string | null
    airport_info_url: string | null
  }
  departure_delay: number | null
  arrival_delay: number | null
  filed_ete: number | null
  progress_percent: number | null
  status: string
  aircraft_type: string | null
  route_distance: number | null
  filed_airspeed: number | null
  filed_altitude: number | null
  route: string | null
  baggage_claim: string | null
  seats_cabin_business: number | null
  seats_cabin_coach: number | null
  seats_cabin_first: number | null
  gate_origin: string | null
  gate_destination: string | null
  terminal_origin: string | null
  terminal_destination: string | null
  type: "General_Aviation" | "Airline"
  scheduled_out: string | null
  estimated_out: string | null
  actual_out: string | null
  scheduled_off: string | null
  estimated_off: string | null
  actual_off: string | null
  scheduled_on: string | null
  estimated_on: string | null
  actual_on: string | null
  scheduled_in: string | null
  estimated_in: string | null
  actual_in: string | null
}

// Exponential backoff helper
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

/**
 * Cached server action to get airport details by ICAO code
 * Uses React's cache function to avoid redundant fetches
 */
export const getAirportDetails = cache(async (icaoCode: string) => {
  console.log(`Fetching airport details for: ${icaoCode}`)

  // Check cache first
  const cached = getCachedAirport(icaoCode)
  if (cached) {
    console.log(`Using cached data for ${icaoCode}`)
    return cached.details
  }

  let retryCount = 0
  const maxRetries = 5
  const baseDelay = 1000 // 1 second

  while (retryCount < maxRetries) {
    try {
      // Add exponential backoff delay
      const delayMs = baseDelay * Math.pow(2, retryCount)
      await delay(delayMs)
      
      const response = await fetchFromFlightAware<AirportDetails>(`/airports/${icaoCode}`)
      
      // Cache the successful response
      const cacheData: CachedAirportDetails = {
        icao_code: icaoCode,
        details: response,
        timestamp: Date.now()
      }
      const currentCache = getCachedAirport(icaoCode) ? [] : [cacheData]
      writeCache(currentCache)
      
      return response
    } catch (error) {
      retryCount++
      if (retryCount === maxRetries) {
        console.error(`Failed to fetch details for ${icaoCode} after ${maxRetries} attempts:`, error)
        throw error
      }
      console.log(`Retry ${retryCount} for ${icaoCode} after ${baseDelay * Math.pow(2, retryCount)}ms delay`)
    }
  }

  throw new Error(`Failed to fetch details for ${icaoCode} after ${maxRetries} attempts`)
})

/**
 * Cached server action to get airport delay information
 * Uses React's cache function to avoid redundant fetches
 */
export const getAirportDelays = cache(async () => {
  console.log("Fetching airport delays data")

  // Check cache first
  const cached = getCachedDelays()
  if (cached) {
    console.log("Using cached airport delays data")
    return cached.delay_data
  }

  let retryCount = 0
  const maxRetries = 3
  const baseDelay = 500 // 500ms

  while (retryCount < maxRetries) {
    try {
      // Add exponential backoff delay
      const delayMs = baseDelay * Math.pow(2, retryCount)
      await delay(delayMs)
      
      const response = await fetchFromFlightAware<AirportDelays>("/airports/delays")
      
      // Cache the successful response
      writeDelaysCache(response)
      
      return response
    } catch (error) {
      retryCount++
      if (retryCount === maxRetries) {
        console.error(`Failed to fetch airport delays after ${maxRetries} attempts:`, error)
        throw error
      }
      console.log(`Retry ${retryCount} for airport delays after ${baseDelay * Math.pow(2, retryCount)}ms delay`)
    }
  }

  throw new Error(`Failed to fetch airport delays after ${maxRetries} attempts`)
})

/**
 * Check if an airport has delays
 * @param code ICAO or IATA code of the airport
 * @returns Delay information if available, null otherwise
 */
export const checkAirportDelay = cache(async (code: string) => {
  try {
    const delaysData = await getAirportDelays()
    return delaysData.delays.find((delay: AirportDelay) => delay.airport === code) || null
  } catch (error) {
    console.error(`Error checking delays for airport ${code}:`, error)
    return null
  }
})

/**
 * Preload airport details by ICAO code
 * This initiates the data fetch without waiting for the result
 */
export async function preloadAirportDetails(icaoCode: string) {
  void getAirportDetails(icaoCode)
}

/**
 * Cached server action to get all flights for a given airport
 * Uses React's cache function to avoid redundant fetches
 * @param airportCode ICAO, IATA or LID code of the airport (ICAO preferred)
 * @param options Additional options to filter flights
 */
export const getAirportFlights = cache(async (
  airportCode: string, 
  options?: {
    airline?: string
    type?: "General_Aviation" | "Airline"
    start?: string
    end?: string
    max_pages?: number
    cursor?: string
  }
): Promise<[boolean, AirportFlights | null]> => {
  console.log(`Fetching flights for airport: ${airportCode}`)
  
  let retryCount = 0
  const maxRetries = 3
  const baseDelay = 500 // 500ms

  while (retryCount < maxRetries) {
    try {
      // Add exponential backoff delay
      const delayMs = baseDelay * Math.pow(2, retryCount)
      await delay(delayMs)
      
      // Build query parameters
      const queryParams = new URLSearchParams()
      
      if (options?.airline) queryParams.append('airline', options.airline)
      if (options?.type) queryParams.append('type', options.type)
      if (options?.start) queryParams.append('start', options.start)
      if (options?.end) queryParams.append('end', options.end)
      if (options?.max_pages) queryParams.append('max_pages', options.max_pages.toString())
      if (options?.cursor) queryParams.append('cursor', options.cursor)
      
      const queryString = queryParams.toString() ? `?${queryParams.toString()}` : ''
      
      const response = await fetchFromFlightAware<AirportFlights>(`/airports/${airportCode}/flights${queryString}`)
      return [false, response]
    } catch (error) {
      retryCount++
      if (retryCount === maxRetries) {
        console.error(`Failed to fetch flights for ${airportCode} after ${maxRetries} attempts:`, error)
        return [false, null]
      }
      console.log(`Retry ${retryCount} for ${airportCode} flights after ${baseDelay * Math.pow(2, retryCount)}ms delay`)
    }
  }

  return [false, null]
})

/**
 * Preload airport flights by airport code
 * This initiates the data fetch without waiting for the result
 * @param airportCode ICAO, IATA or LID code of the airport (ICAO preferred)
 * @param options Additional options to filter flights
 */
export async function preloadAirportFlights(
  airportCode: string,
  options?: {
    airline?: string
    type?: "General_Aviation" | "Airline"
    start?: string
    end?: string
    max_pages?: number
    cursor?: string
  }
) {
  void getAirportFlights(airportCode, options)
} 