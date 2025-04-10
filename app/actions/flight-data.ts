"use server"

import { cache } from "react"
import { fetchFromFlightAware } from "@/lib/fetch"
import type { Flight, FlightAwareResponse } from "@/lib/types"

/**
 * Cached server action to get all flights
 * Uses React's cache function to avoid redundant fetches
 */
export const getAllFlights = cache(async () => {
  console.log("Fetching all flights...")

  try {
    const flights: Flight[] = []

    // Fetch DAL2267
    try {
      const response1 = await fetchFromFlightAware<FlightAwareResponse>("/flights/DAL2267")
      flights.push(...response1.flights)
    } catch (error) {
      console.error("Error fetching DAL2267:", error)
    }

    // Fetch DAL2272
    try {
      const response2 = await fetchFromFlightAware<FlightAwareResponse>("/flights/DAL2272")
      flights.push(...response2.flights)
    } catch (error) {
      console.error("Error fetching DAL2272:", error)
    }

    return flights
  } catch (error) {
    console.error("Error in getAllFlights:", error)
    throw error
  }
})

/**
 * Cached server action to get flights by ID
 * Uses React's cache function to avoid redundant fetches
 */
export const getFlightsById = cache(async (flightId: string) => {
  console.log(`Fetching flights with ID: ${flightId}`)

  try {
    const response = await fetchFromFlightAware<FlightAwareResponse>(`/flights/${flightId}`)
    if (response.flights && response.flights.length > 0) {
      return response.flights
    }
    return []
  } catch (error) {
    console.error("Error in getFlightsById:", error)
    throw error
  }
})

/**
 * Get default flights (DAL2267) for display
 */
export const getDefaultFlights = cache(async () => {
  return getFlightsById("DAL2267")
})

/**
 * Preload flights by ID
 * This initiates the data fetch without waiting for the result
 */
export async function preloadFlightsById(flightId: string) {
  void getFlightsById(flightId)
}

/**
 * Preload all flights
 * This initiates the data fetch without waiting for the result
 */
export async function preloadAllFlights() {
  void getAllFlights()
}

/**
 * Preload the default flights
 * This initiates the data fetch without waiting for the result
 */
export async function preloadDefaultFlights() {
  void getDefaultFlights()
}
