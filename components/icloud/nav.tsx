import { MoreHorizontal } from "lucide-react"

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-3 bg-background/80 backdrop-blur-xl">
      <div className="flex items-center gap-2">
        <svg
          className="h-5 w-5 text-foreground"
          viewBox="0 0 260 280"
          fill="none"
          aria-label="Tier 2 badge"
        >
          <defs>
            <linearGradient id="navBadge" x1="130" y1="0" x2="130" y2="280" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#64D2FF" />
              <stop offset="100%" stopColor="#0A84FF" />
            </linearGradient>
          </defs>
          <path
            d="M130 16 L240 60 L240 160 C240 210 190 256 130 272 C70 256 20 210 20 160 L20 60 Z"
            fill="url(#navBadge)"
          />
          <path
            d="M130 80 L142 118 L182 118 L150 142 L162 180 L130 158 L98 180 L110 142 L78 118 L118 118 Z"
            fill="white"
            opacity="0.95"
          />
        </svg>
        <span className="text-sm font-medium text-foreground">Tier 2</span>
      </div>
      <button
        className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-secondary transition-colors"
        aria-label="More options"
      >
        <MoreHorizontal className="h-5 w-5 text-foreground" />
      </button>
    </nav>
  )
}
