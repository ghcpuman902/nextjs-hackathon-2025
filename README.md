# ✈️ Flight Delay Insight — Next.js Hackathon 2025

A lightweight, performance-first web app that helps users make smarter flight booking decisions by showing **historical flight delay patterns** and **route statistics**.  

Not a live tracker — this is about what usually happens, not where the plane is *now*.

---

## 🧠 Why This Exists

Most tools only help after you've booked a flight.  
We want to help **before** you book, by showing:
- Which routes or airlines are frequently delayed
- How severe those delays usually are
- Whether there are better alternatives

---

## 🔥 Key Features

- Flight/route/airport lookup with summarised delay stats  
- Clean UI showing “delay risk” levels  
- Treemap/heatmap-style dashboard view for visual insight  
- Streaming data & low round-trips using Next.js 15 features  
- Open-source and deployable on Vercel  

---

## 🛠 Tech Stack

- **Next.js 15 (App Router + Server Actions)**  
- **Tailwind CSS v4**  
- **Neon** for caching and persisted query results  
- **Upstash** for rate-limiting and async coordination  
- **FlightAware AeroAPI** as primary data source  

---

## 🧪 Performance Focus

- Use of Server Actions for atomic data fetches  
- Streaming responses to reduce perceived latency  
- Avoid empty state flashes with optimistic UI  
- Cached API results (where TOS allows) to improve TTFB

---

## ✍️ Getting Started

### 1. Clone this repo

```bash
git clone https://github.com/ghcpuman902/nextjs-hackathon-2025.git ./flight-delay-insight
cd flight-delay-insight
pnpm install
```

---

### 2. Set up environment variables

Copy the `.env.example` file and rename it to `.env.local`, then add your FlightAware credentials (see below):

```
FLIGHTAWARE_API_KEY=your_key_here
```

---

### 3. How to Get a FlightAware API Key

1. Go to the FlightAware AeroAPI portal:  
   https://www.flightaware.com/aeroapi/portal/#overview
2. Click **Sign Up** in the top right (create an account)
3. After registration and approval, return to the same link  
4. Go to the **"API Keys"** section in the AeroAPI portal and create a new key  
5. Use that key in your `.env.local` file

---

## 🧱 Project Structure

```
/app
  /flight/[id]        → Flight-specific stats
  /route/[a-b]        → Route comparison
  /airport/[code]     → Airport-level delays
  /dashboard          → Treemap/heatmap UI
  /api                → Server Actions + wrapper logic

/lib
  flightaware.ts      → AeroAPI client wrapper
  cache.ts            → Neon/Upstash logic

/public
  placeholder UI assets or visuals
```

---

## 🗂 Contributing Workflow

- Develop in your own branch  
- Keep PRs focused — one component or feature at a time  
- Open to refactors or improvements in data structure or visual display  
- Use Discord for async updates

---

## 📅 Team

- **Mangle** – project lead, architecture, API scaffolding  
- **Toni** – backend, data logic, API integration  
- **Nikhil** – frontend, UI/UX, animations + visual polish  

---

## ⚖️ Legal / API TOS Notes

FlightAware only allows access to **the past 11 days** of data.  
We will **not store or distribute raw flight data beyond caching permitted by their TOS.**  
No personal data is collected or stored.

---

## ✅ TODO

- [ ] Implement data caching with Neon  
- [ ] Build Treemap-style dashboard visualisation  
- [ ] Add route + airport comparison UI  
- [ ] Add basic flight detail lookup page  
- [ ] Optimise for Vercel Speed Insights

---

Happy flying (theoretically)!  
Let us know if you want to contribute.