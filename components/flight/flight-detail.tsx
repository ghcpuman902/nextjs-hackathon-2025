import type { Flight } from "@/lib/types"

interface FlightDetailProps {
  flights: Flight[]
}

export default function FlightDetail({ flights }: FlightDetailProps) {
  if (!flights || flights.length === 0) {
    return <div className="text-center text-gray-500">No flight data available</div>
  }

  return (
    <div className="space-y-8">
      {flights.map((flight) => (
        <div key={flight.fa_flight_id} className="space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Flight {flight.ident}</h1>
            <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(flight.status)}`}>
              {flight.status.toUpperCase()}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Origin</h3>
                <p className="text-lg font-semibold">{flight.origin.code}</p>
                <p className="text-sm">{flight.origin.name}</p>
                <p className="text-sm text-gray-600">{formatTime(flight.scheduled_out || "")}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">Destination</h3>
                <p className="text-lg font-semibold">{flight.destination.code}</p>
                <p className="text-sm">{flight.destination.name}</p>
                <p className="text-sm text-gray-600">{formatTime(flight.scheduled_in || "")}</p>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Flight Information</h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr>
                    <td className="py-1 text-gray-500">Flight ID:</td>
                    <td className="py-1">{flight.fa_flight_id}</td>
                  </tr>
                  <tr>
                    <td className="py-1 text-gray-500">Flight Number:</td>
                    <td className="py-1">{flight.flight_number}</td>
                  </tr>
                  <tr>
                    <td className="py-1 text-gray-500">Operator:</td>
                    <td className="py-1">
                      {flight.operator} ({flight.operator_iata})
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1 text-gray-500">Status:</td>
                    <td className="py-1">{flight.status}</td>
                  </tr>
                  <tr>
                    <td className="py-1 text-gray-500">Aircraft:</td>
                    <td className="py-1">{flight.aircraft_type || "N/A"}</td>
                  </tr>
                  <tr>
                    <td className="py-1 text-gray-500">Registration:</td>
                    <td className="py-1">{flight.registration || "N/A"}</td>
                  </tr>
                  <tr>
                    <td className="py-1 text-gray-500">Departure:</td>
                    <td className="py-1">{formatDateTime(flight.scheduled_out || "")}</td>
                  </tr>
                  <tr>
                    <td className="py-1 text-gray-500">Arrival:</td>
                    <td className="py-1">{formatDateTime(flight.scheduled_in || "")}</td>
                  </tr>
                  {flight.gate_origin && (
                    <tr>
                      <td className="py-1 text-gray-500">Origin Gate:</td>
                      <td className="py-1">{flight.gate_origin}</td>
                    </tr>
                  )}
                  {flight.gate_destination && (
                    <tr>
                      <td className="py-1 text-gray-500">Destination Gate:</td>
                      <td className="py-1">{flight.gate_destination}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}
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

// Helper function to format date and time
function formatDateTime(timeString: string): string {
  if (!timeString) return "N/A"

  return new Date(timeString).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
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
