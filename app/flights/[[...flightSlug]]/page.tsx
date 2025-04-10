import { Suspense } from "react"
import Link from "next/link"
import { getFlightsById } from "@/app/actions/flight-data"
import FlightSearch from "@/components/flight/flight-search"
import RawFlightData from "@/components/flight/raw-flight-data"

// Preload flight data for this page
export async function generateMetadata({ params }: { params: Promise<{ flightSlug?: string[] }> }) {
  // Start loading flight data as early as possible
  const resolvedParams = await params
  const flightId = resolvedParams.flightSlug?.[0] || ''
  getFlightsById(flightId)
  return { title: `Flight ${flightId}` }
}

export default async function FlightPage({ params }: { params: Promise<{ flightSlug?: string[] }> }) {
  const resolvedParams = await params
  const flightId = resolvedParams.flightSlug?.[0] || ''
  return (
    <main className="container mx-auto p-4">
      <Link href="/" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to home
      </Link>
      
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:pr-4">
          <h1 className="text-3xl font-bold mb-6">Flight {flightId || 'Details'}</h1>
          
          <p className="mb-4">
            Search for a specific flight or view details for the current flight.
          </p>
          
          <div className="mb-6">
            <FlightSearch flightId={flightId} />
          </div>
        </div>
        
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <h2 className="text-xl font-bold mb-4">Flight Data</h2>
          <Suspense fallback={<div>Loading flight details...</div>}>
            <FlightDetailContent flightId={flightId} />
          </Suspense>
        </div>
      </div>
    </main>
  )
}

// Separate component to handle async data fetching
async function FlightDetailContent({ flightId }: { flightId: string }) {
  try {
    // This will either use the preloaded data or fetch it if not already loaded
    const flights = await getFlightsById(flightId)
    return <RawFlightData flights={flights} />
  } catch (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded">
        <h2 className="text-lg font-medium">Error</h2>
        <p>{error instanceof Error ? error.message : "Failed to load flight details"}</p>
      </div>
    )
  }
}
