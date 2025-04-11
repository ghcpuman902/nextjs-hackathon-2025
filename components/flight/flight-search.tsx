"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function FlightSearch({ flightId }: { flightId: string }) {
  const [flightNumber, setFlightNumber] = useState(flightId || "DAL2267")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!flightNumber.trim()) return

    setIsSubmitting(true)

    // Convert to uppercase and remove spaces
    const formattedFlightNumber = flightNumber.toUpperCase().replace(/\s+/g, "")

    // Redirect to the flight details page
    router.push(`/flights/${formattedFlightNumber}`)
  }

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row">
        <div className="flex-grow">
          <label htmlFor="flight-search" className="block text-sm font-medium mb-1">
            Search for a flight
          </label>
          <div className="flex flex-row gap-0">
            <Input
              type="text"
              id="flight-search"
              placeholder="Enter flight number (e.g., DAL2267)"
              value={flightNumber}
              onChange={(e) => setFlightNumber(e.target.value)}
              className="w-full px-4 py-2 border border-r-0 border-black focus:outline-none focus:ring-1 focus:ring-black rounded-none"
              disabled={isSubmitting}
            />
            <Button
              type="submit"
              disabled={isSubmitting || !flightNumber.trim()}
              className="px-4 py-2 bg-black text-white border border-black hover:bg-white hover:text-black transition-colors focus:outline-none focus:ring-1 focus:ring-black disabled:opacity-50 disabled:cursor-not-allowed self-end rounded-none"
            >
              {isSubmitting ? "Searching..." : "Search"}
            </Button>
          </div>
        </div>
      </form>
      <p className="mt-2 text-sm text-gray-500">Example flight numbers: DAL2267, DAL2272, UAL123</p>
    </div>
  )
}
