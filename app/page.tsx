import { getDefaultFlights, preloadDefaultFlights } from "@/app/actions/flight-data"
import RawFlightData from "@/components/flight/raw-flight-data"
import { Suspense } from "react"
import FlightSearch from "@/components/flight/flight-search"

// Preload default flight data
export function generateMetadata() {
  preloadDefaultFlights()
  return { title: "Flight History App" }
}

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:pr-4">
          <h1 className="text-3xl font-bold mb-6">Flight History App</h1>

          <p className="mb-4">
            Welcome to the Flight History App. This application demonstrates Next.js patterns including:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Server actions for data fetching with caching</li>
            <li>Dynamic routes with slugs</li>
            <li>Preloading patterns</li>
            <li>Asynchronous data handling</li>
          </ul>

          <div className="mb-6">
            <FlightSearch />
          </div>
        </div>

        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <h2 className="text-xl font-bold mb-4">Default Flight Data</h2>
          <Suspense fallback={<div>Loading default flight data...</div>}>
            <DefaultFlightData />
          </Suspense>
        </div>
      </div>
    </main>
  )
}

async function DefaultFlightData() {
  const flights = await getDefaultFlights()
  return <RawFlightData flights={flights} />
}
