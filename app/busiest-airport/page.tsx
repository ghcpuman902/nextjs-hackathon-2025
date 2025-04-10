import { getAirportDetails } from "@/app/actions/airport-data"
import airports from "./airports.json"
import { readCache, writeCache, type CachedAirportDetails } from "@/lib/file-utils"

export default async function BusiestAirportPage() {
  // Get existing cache
  const existingCache = readCache()
  const processedAirports = new Set(existingCache.map(item => item.icao_code))
  
  // Process airports sequentially to avoid rate limiting
  const airportDetails: CachedAirportDetails[] = [...existingCache]
  
  for (const airport of airports.airports) {
    // Skip if already processed
    if (processedAirports.has(airport.icao_code)) {
      console.log(`Skipping already processed airport: ${airport.icao_code}`)
      continue
    }

    try {
      console.log(`Processing airport: ${airport.icao_code}`)
      const details = await getAirportDetails(airport.icao_code)
      
      const newEntry: CachedAirportDetails = {
        icao_code: airport.icao_code,
        details: {
          ...airport,
          details
        },
        timestamp: Date.now()
      }
      
      airportDetails.push(newEntry)
      // Update cache after each successful fetch
      writeCache(airportDetails)
    } catch (error) {
      console.error(`Failed to fetch details for ${airport.icao_code}:`, error)
      const errorEntry: CachedAirportDetails = {
        icao_code: airport.icao_code,
        details: {
          ...airport,
          details: null
        },
        error: error instanceof Error ? error.message : "Unknown error",
        timestamp: Date.now()
      }
      airportDetails.push(errorEntry)
      // Update cache even for errors
      writeCache(airportDetails)
    }
  }

  // Output the results as JSON
  return (
    <pre className="whitespace-pre-wrap break-words p-4 bg-gray-100 rounded-lg">
      {JSON.stringify(airportDetails, null, 2)}
    </pre>
  )
}
