import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Sidebar from "./Components/Sidebar"
import Home from "./Pages/Home"
import Watch from "./Pages/Watch"
import Channel from "./Pages/Channel"
import Playlist from "./Pages/Playlist"
import Search from "./Pages/Search"

const App = () => {
  const [filter, setFilter] = useState("home")
  const [search, setSeach] = useState("")
  const [categoryId, setCategoryId] = useState<string | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <BrowserRouter>
      {/* Sidebar drawer (Tailwind) */}
      <div
        className={`fixed inset-0 z-[60] ${sidebarOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!sidebarOpen}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-200 ${sidebarOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setSidebarOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute left-0 top-0 h-full w-[85vw] max-w-[340px] bg-[#0c0c0c] shadow-2xl transition-transform duration-200 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
        >
          <Sidebar
            filter={filter}
            setFilter={setFilter}
            setCategoryId={setCategoryId}
            onClose={() => setSidebarOpen(false)}
          />
        </div>
      </div>

      <Navbar search={search} setSearch={setSeach} onMenuClick={() => setSidebarOpen(true)} />

      <Routes>
        <Route path="/" element={<Home filter={filter} categoryId={categoryId} />} />
        <Route path="/watch/:videoId/:channelId" element={<Watch />} />
        <Route path="/search" element={<Search setSearch={setSeach} />} />
        <Route path="/channel/:channelId" element={<Channel />} />
        <Route path="/playlist/:channelId/:playlistId" element={<Playlist />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
