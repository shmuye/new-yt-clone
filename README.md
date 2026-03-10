## YouTube Clone (React + TypeScript + Vite)

Modern YouTube UI clone built with **React**, **TypeScript**, and **Vite**, using the official **YouTube Data API v3**.  
It supports browsing popular videos, searching, watching videos with details, viewing channel info, playlists, and comments – with a responsive layout similar to YouTube.

---

## Tech Stack

- **Frontend**: React, TypeScript
- **Bundler/Dev Server**: Vite
- **Routing**: `react-router-dom`
- **HTTP Client**: `axios`
- **UI Helpers**: `react-icons`, `react-infinite-scroll-component`
- **Linting**: ESLint (TypeScript + React)

---

## Features

- **Home feed**
  - Most popular videos fetched from the YouTube Data API
  - Category-based filtering via sidebar
  - Infinite scroll to load more videos

- **Search**
  - Search bar in the navbar
  - Trigger search via **Enter key** or **search icon**
  - Search results show enriched video cards with channel details

- **Watch page**
  - Embedded YouTube player
  - Video details (title, channel info, stats)
  - Related/activities list on the right
  - Comments section (responsive layout: side/below)

- **Channel & playlists**
  - Channel information and statistics
  - Channel activities and videos
  - Playlists and playlist items listing

- **Responsive UI**
  - Mobile, tablet, and desktop layouts
  - Sticky navbar and scrollable content sections

---

## Getting Started

### 1. Prerequisites

- **Node.js** ≥ 18 recommended
- **npm** (comes with Node)
- A **YouTube Data API v3** key (from Google Cloud Console)

### 2. Clone the repository

```bash
git clone <your-repo-url>
cd yt-clone
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the project root (same level as `package.json`) and add your YouTube API key:

```bash
VITE_API_KEY=YOUR_YOUTUBE_DATA_API_KEY
```

This is read in `src/utils/api.ts` via `import.meta.env.VITE_API_KEY`.

### 5. Run the development server

```bash
npm run dev
```

By default, Vite will print a local development URL (typically `http://localhost:5173`). Open it in your browser to view the app.

---

## Available Scripts

- **`npm run dev`**  
  Starts the Vite dev server with hot module replacement.

- **`npm run build`**  
  Type-checks the project and builds an optimized production bundle.

- **`npm run preview`**  
  Serves the production build locally for testing.

- **`npm run lint`**  
  Runs ESLint over the project.

---

## Project Structure (High-Level)

- **`src/main.tsx`**: App bootstrap and router setup.
- **`src/App.tsx`**: Main layout, routes, and shared components.
- **`src/Components/`**: Reusable UI components (navbar, cards, sidebar, comments, etc.).
- **`src/Pages/`**: Route-level pages (`Home`, `Search`, `Watch`, `Channel`, `Playlist`).
- **`src/Hooks/`**: Custom hooks for data fetching and state management (e.g. `useHome`, `useChannel`).
- **`src/utils/`**: API functions, parsers, and shared types.

---

## API Usage Notes

All API calls are made directly to:

- `https://www.googleapis.com/youtube/v3/...`

using the `VITE_API_KEY` value. Be mindful of:





