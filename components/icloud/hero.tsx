export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center pt-20 pb-8 px-6">
      {/* iCloud Icon */}
      <div className="mb-4 mt-8">
        <svg
          width="300"
          height="210"
          viewBox="0 0 300 210"
          fill="none"
          className="drop-shadow-2xl"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="cloudMain" x1="150" y1="10" x2="150" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#64D2FF" />
              <stop offset="40%" stopColor="#32ADE6" />
              <stop offset="100%" stopColor="#0A84FF" />
            </linearGradient>
            <linearGradient id="cloudLight" x1="90" y1="40" x2="130" y2="180" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#B0E8FF" />
              <stop offset="40%" stopColor="#64D2FF" />
              <stop offset="100%" stopColor="#32ADE6" />
            </linearGradient>
            <radialGradient id="cloudShine" cx="0.35" cy="0.25" r="0.65">
              <stop offset="0%" stopColor="rgba(255,255,255,0.25)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
          </defs>
          {/* Right / top lobe (biggest) */}
          <ellipse cx="185" cy="88" rx="100" ry="78" fill="url(#cloudMain)" />
          {/* Center lobe */}
          <ellipse cx="130" cy="105" rx="82" ry="70" fill="url(#cloudLight)" />
          {/* Left small lobe */}
          <ellipse cx="82" cy="122" rx="58" ry="50" fill="url(#cloudLight)" opacity="0.92" />
          {/* Base */}
          <rect x="48" y="130" width="205" height="48" rx="24" fill="url(#cloudMain)" />
          {/* Shine overlays */}
          <ellipse cx="185" cy="88" rx="100" ry="78" fill="url(#cloudShine)" />
          <ellipse cx="130" cy="105" rx="82" ry="70" fill="url(#cloudShine)" />
        </svg>
      </div>

      {/* iCloud text */}
      <h1 className="text-7xl md:text-[96px] font-semibold text-foreground tracking-tight mb-12">
        iCloud
      </h1>

      {/* Sign In button */}
      <a
        href="#"
        className="inline-flex items-center justify-center px-10 py-3.5 rounded-full bg-primary text-primary-foreground text-lg font-medium hover:bg-primary/90 transition-colors mb-10 shadow-sm"
      >
        Sign In
      </a>

      {/* Tagline */}
      <p className="text-2xl md:text-[34px] font-semibold text-muted-foreground text-center leading-snug max-w-2xl text-balance">
        The best place for all your photos, files, notes, mail, and more.
      </p>
    </section>
  )
}
