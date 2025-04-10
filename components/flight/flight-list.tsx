import Link from "next/link"
import type { Flight } from "@/lib/types"

interface FlightListProps {
  flights: Flight[]
}

export default function FlightList({ flights }: FlightListProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Available Flights</h2>

      {flights.length === 0 ? (
        <p>No flights available.</p>
      ) : (
        <ul className="space-y-2">
          {flights.map((flight) => (
            <li key={flight.fa_flight_id} className="border p-4 rounded-md hover:bg-gray-50">
              <Link href={`/flights/${flight.ident}`} className="block">
                <div className="flex justify-between">
                  <span className="font-medium">{flight.ident}</span>
                  <span className={`px-2 py-1 rounded text-xs ${getStatusColor(flight.status)}`}>
                    {flight.status.toUpperCase()}
                  </span>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  {flight.origin.code} → {flight.destination.code}
                </div>
                <div className="mt-1 text-xs text-gray-500">Departure: {formatTime(flight.scheduled_out || "")}</div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

// Helper function to format time
function formatTime(timeString: string): string {
  if (!timeString) return "N/A"

  return new Date(timeString).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })
}

// Helper function to get status color
function getStatusColor(status: string): string {
  const statusLower = status.toLowerCase()

  if (statusLower.includes("scheduled")) {
    return "bg-blue-100 text-blue-800"
  } else if (statusLower.includes("delayed")) {
    return "bg-yellow-100 text-yellow-800"
  } else if (statusLower.includes("departed") || statusLower.includes("en route")) {
    return "bg-green-100 text-green-800"
  } else if (statusLower.includes("arrived")) {
    return "bg-green-100 text-green-800"
  } else if (statusLower.includes("cancelled")) {
    return "bg-red-100 text-red-800"
  } else {
    return "bg-gray-100 text-gray-800"
  }
}
