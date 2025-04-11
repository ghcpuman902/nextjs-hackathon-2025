import AirportMapInterface from "./AirportMapInterface"
import { getAirportDelays } from "../actions/airport-data"
import airports from "./busiest-airports.json"
import { Suspense } from "react"

export default function BusiestAirportPage() {
    // Start fetching airport delays early (not awaited)
    const airportDelaysPromise = getAirportDelays()
    
    // Get the first airport's ICAO code to prefetch its flight data
    const firstAirportIcao = Object.keys(airports)[0]
    
    return (
        <div className="w-full min-h-screen border border-foreground border-b-0">
            {/* <div className="text-base lg:text-2xl font-black mb-4 tracking-wide">World&apos;s Busiest Routes</div> */}
            <Suspense fallback={
                <div className="flex items-center justify-center w-full h-screen">
                    <div className="animate-pulse text-muted-foreground">Loading airport data...</div>
                </div>
            }>
                <AirportMapInterface 
                    airportsData={airports} 
                    airportDelaysPromise={airportDelaysPromise}
                    initialAirportIcao={firstAirportIcao}
                />
            </Suspense>
        </div>
    )
}
