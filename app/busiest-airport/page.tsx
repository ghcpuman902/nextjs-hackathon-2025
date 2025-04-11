import airports from "./busiest-airports.json"
import WorldMap from "./WorldMap"
import { getAirportDelays } from "../actions/airport-data"
import type { AirportDelays } from "../../lib/types"

interface Airport {
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

export default async function BusiestAirportPage() {
    // Initialize with default value
    let delaysData: AirportDelays = {
        links: {},
        num_pages: 0,
        delays: []
    }

    try {
        const response = await getAirportDelays()
        // Only update if we got valid data
        if (response && Array.isArray(response.delays)) {
            delaysData = response
        }
    } catch (error) {
        console.error("Failed to fetch airport delays:", error)
    }

    // Transform the airports data and include delay information
    const airportLocations = Object.entries(airports).map(([icao, airport]: [string, Airport]) => {
        // Try to find delay information for this airport
        const airportDelay = delaysData.delays?.find(
            (delay) => delay.airport === airport.iata_code
        )
        
        return {
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

    return (
        <div className="container mx-auto p-4">
            <div className="mb-4 p-4 relative">
                <div className="text-base lg:text-2xl font-black mb-4 tracking-wide absolute top-0 left-0">World&apos;s Busiest Routes</div>
                <WorldMap
                    airports={airportLocations}
                />
            </div>
            {/* <div className="bg-muted text-muted-foreground p-4 rounded-lg">
                <h2 className="text-xl font-semibold mb-2">Airport Data</h2>
                <pre className="whitespace-pre-wrap break-words">
                    {JSON.stringify(airportLocations.map((airport) => airport.icao_code), null, 2)}
                </pre>
            </div> */}
        </div>
    )
}
