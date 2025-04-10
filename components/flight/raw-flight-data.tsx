import type { Flight } from "@/lib/types"

interface RawFlightDataProps {
  flights: Flight[]
}

export default function RawFlightData({ flights }: RawFlightDataProps) {
  if (!flights || flights.length === 0) {
    return <div className="text-center text-gray-500">No flight data available</div>
  }

  return (
    <div className="space-y-8">
      {flights.map((flight) => (
        <div key={flight.fa_flight_id} className="font-mono">
          <pre className="whitespace-pre-wrap">
            {`
===============================================
FLIGHT INFORMATION - ${flight.ident}
===============================================

BASIC INFO:
----------
Flight ID:       ${flight.fa_flight_id}
Ident:           ${flight.ident}
ICAO Ident:      ${flight.ident_icao || "--"}
IATA Ident:      ${flight.ident_iata || "--"}
Flight Number:   ${flight.flight_number || "--"}
Operator:        ${flight.operator || "--"} (${flight.operator_iata || "--"})
Registration:    ${flight.registration || "--"}
Aircraft Type:   ${flight.aircraft_type || "--"}
Status:          ${flight.status}

ROUTE INFO:
----------
Origin:          ${flight.origin.code} - ${flight.origin.name || "--"} (${flight.origin.city || "--"})
Destination:     ${flight.destination.code} - ${flight.destination.name || "--"} (${flight.destination.city || "--"})
Route:           ${flight.route || "--"}
Distance:        ${flight.route_distance ? flight.route_distance + " miles" : "--"}
Filed Altitude:  ${flight.filed_altitude ? "FL" + flight.filed_altitude : "--"}
Filed Airspeed:  ${flight.filed_airspeed ? flight.filed_airspeed + " knots" : "--"}

TIMES:
-----
Scheduled Out:   ${formatDateTime(flight.scheduled_out || "")}
Actual Out:      ${formatDateTime(flight.actual_out || "")}
Scheduled Off:   ${formatDateTime(flight.scheduled_off || "")}
Actual Off:      ${formatDateTime(flight.actual_off || "")}
Scheduled On:    ${formatDateTime(flight.scheduled_on || "")}
Actual On:       ${formatDateTime(flight.actual_on || "")}
Scheduled In:    ${formatDateTime(flight.scheduled_in || "")}
Actual In:       ${formatDateTime(flight.actual_in || "")}

DELAYS:
------
Departure Delay: ${flight.departure_delay ? formatDelay(flight.departure_delay) : "--"}
Arrival Delay:   ${flight.arrival_delay ? formatDelay(flight.arrival_delay) : "--"}

AIRPORT INFO:
-----------
Origin Gate:     ${flight.gate_origin || "--"}
Origin Terminal: ${flight.terminal_origin || "--"}
Dest Gate:       ${flight.gate_destination || "--"}
Dest Terminal:   ${flight.terminal_destination || "--"}
Baggage Claim:   ${flight.baggage_claim || "--"}

PROGRESS:
-------
Progress:        ${flight.progress_percent !== null ? flight.progress_percent + "%" : "--"}
ETE:             ${flight.filed_ete ? formatDuration(flight.filed_ete) : "--"}

FLAGS:
-----
Diverted:        ${flight.diverted ? "YES" : "NO"}
Cancelled:       ${flight.cancelled ? "YES" : "NO"}
Blocked:         ${flight.blocked ? "YES" : "NO"}
Position Only:   ${flight.position_only ? "YES" : "NO"}

===============================================
`}
          </pre>
        </div>
      ))}
    </div>
  )
}

// Helper function to format date and time
function formatDateTime(timeString: string): string {
  if (!timeString) return "--"

  return new Date(timeString).toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  })
}

// Helper function to format delay
function formatDelay(delay: number): string {
  if (delay < 0) {
    return `${Math.abs(delay)} seconds early`
  } else {
    return `${delay} seconds late`
  }
}

// Helper function to format duration
function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)

  return `${hours}h ${minutes}m`
}
