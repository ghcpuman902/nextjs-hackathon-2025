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