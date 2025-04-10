import { Suspense } from "react"
import Link from "next/link"
import { getFlightsById } from "@/app/actions/flight-data"
import FlightDetail from "@/components/flight/flight-detail"
import FlightSearch from "@/components/flight/flight-search"

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
    <main className="max-w-4xl mx-auto p-6">
      <Link href="/" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to home
      </Link>

      <div className="mb-8">
        <FlightSearch />
      </div>

      <Suspense fallback={<div>Loading flight details...</div>}>
        <FlightDetailContent flightId={flightId} />
      </Suspense>
    </main>
  )
}

// Separate component to handle async data fetching
async function FlightDetailContent({ flightId }: { flightId: string }) {
  try {
    // This will either use the preloaded data or fetch it if not already loaded
    const flights = await getFlightsById(flightId)
    return <FlightDetail flights={flights} />
  } catch (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded">
        <h2 className="text-lg font-medium">Error</h2>
        <p>{error instanceof Error ? error.message : "Failed to load flight details"}</p>
      </div>
    )
  }
}
