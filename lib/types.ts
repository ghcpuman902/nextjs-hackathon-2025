import type { AirportDetails } from "../app/actions/airport-data"

export interface FlightAwareResponse {
  links: {
    next?: string
  }
  num_pages: number
  flights: Flight[]
}

export interface Flight {
  ident: string
  ident_icao: string | null
  ident_iata: string | null
  fa_flight_id: string
  operator: string | null
  operator_icao: string | null
  operator_iata: string | null
  flight_number: string | null
  registration: string | null
  atc_ident: string | null
  inbound_fa_flight_id: string | null
  codeshares: string[]
  codeshares_iata: string[]
  blocked: boolean
  diverted: boolean
  cancelled: boolean
  position_only: boolean
  origin: FlightAirportRef
  destination: FlightAirportRef
  departure_delay: number | null
  arrival_delay: number | null
  filed_ete: number | null
  progress_percent: number | null
  status: string
  aircraft_type: string | null
  route_distance: number | null
  filed_airspeed: number | null
  filed_altitude: number | null
  route: string | null
  baggage_claim: string | null
  seats_cabin_business: number | null
  seats_cabin_coach: number | null
  seats_cabin_first: number | null
  gate_origin: string | null
  gate_destination: string | null
  terminal_origin: string | null
  terminal_destination: string | null
  type: "General_Aviation" | "Airline"
  scheduled_out: string | null
  estimated_out: string | null
  actual_out: string | null
  scheduled_off: string | null
  estimated_off: string | null
  actual_off: string | null
  scheduled_on: string | null
  estimated_on: string | null
  actual_on: string | null
  scheduled_in: string | null
  estimated_in: string | null
  actual_in: string | null
  foresight_predictions_available: boolean
  actual_runway_off: string | null
  actual_runway_on: string | null
}

export interface FlightAirportRef {
  code: string | null
  code_icao: string | null
  code_iata: string | null
  code_lid: string | null
  timezone: string | null
  name: string | null
  city: string | null
  airport_info_url: string | null
}

export interface AirportDelays {
  links: {
    next?: string
  }
  num_pages: number
  delays: Array<AirportDelay>
}

export interface AirportDelay {
  airport: string
  category: string
  color: 'red' | 'yellow' | 'green'
  delay_secs: number
  reasons: Array<DelayReason>
}

export interface DelayReason {
  category: string
  color: 'red' | 'yellow' | 'green'
  delay_secs: number
  reason: string
}

export interface CachedAirportDetails {
  icao_code: string
  details: AirportDetails
  timestamp: number
}
