/**
 * Utility function to fetch data from FlightAware API
 */
import mockData from "./mock-data.json"
async function returnMockDataWithDelay<T>(): Promise<T> {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return mockData as T
}

export async function fetchFromFlightAware<T>(endpoint: string): Promise<T> {
  const useMockData = true

  if (useMockData) {
    return returnMockDataWithDelay<T>()
  }

  const API_BASE_URL = "https://aeroapi.flightaware.com/aeroapi"
  const API_KEY = process.env.FLIGHTAWARE_API_KEY

  if (!API_KEY) {
    throw new Error("FLIGHTAWARE_API_KEY environment variable is not set")
  }

  const url = `${API_BASE_URL}${endpoint}`

  const response = await fetch(url, {
    headers: {
      "x-apikey": API_KEY,
    },
    next: { revalidate: 60 }, // Cache for 60 seconds
  })

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`)
  }

  return response.json()
}

/**
 * Utility function to simulate network delay for development
 * Used when API key is not available
 */
export async function fetchWithDelay<T>(data: T, delayMs = 1000): Promise<T> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, delayMs))
  return data
}
