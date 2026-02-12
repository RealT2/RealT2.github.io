"use client"

import { useEffect, useState } from "react"

/* ── Blue Rank Badge (replaces cloud) ── */
function RankBadge({ className }: { className?: string }) {
  return (
    <svg
      width="260"
      height="280"
      viewBox="0 0 260 280"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="badgeBody" x1="130" y1="0" x2="130" y2="280" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#64D2FF" />
          <stop offset="50%" stopColor="#0A84FF" />
          <stop offset="100%" stopColor="#0050D0" />
        </linearGradient>
        <linearGradient id="badgeInner" x1="130" y1="40" x2="130" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#5AC8FA" />
          <stop offset="100%" stopColor="#007AFF" />
        </linearGradient>
        <radialGradient id="badgeShine" cx="0.35" cy="0.2" r="0.65">
          <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
        <filter id="badgeShadow" x="-20%" y="-10%" width="140%" height="130%">
          <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="#0A84FF" floodOpacity="0.4" />
        </filter>
      </defs>
      {/* Shield shape */}
      <path
        d="M130 16 L240 60 L240 160 C240 210 190 256 130 272 C70 256 20 210 20 160 L20 60 Z"
        fill="url(#badgeBody)"
        filter="url(#badgeShadow)"
      />
      <path
        d="M130 32 L226 70 L226 158 C226 202 182 242 130 256 C78 242 34 202 34 158 L34 70 Z"
        fill="url(#badgeInner)"
      />
      <path
        d="M130 32 L226 70 L226 158 C226 202 182 242 130 256 C78 242 34 202 34 158 L34 70 Z"
        fill="url(#badgeShine)"
      />
      {/* Star */}
      <path
        d="M130 80 L142 118 L182 118 L150 142 L162 180 L130 158 L98 180 L110 142 L78 118 L118 118 Z"
        fill="white"
        opacity="0.95"
      />
      {/* Ribbon tails */}
      <path d="M60 230 L90 200 L90 260 L60 280 Z" fill="url(#badgeBody)" opacity="0.7" />
      <path d="M200 230 L170 200 L170 260 L200 280 Z" fill="url(#badgeBody)" opacity="0.7" />
    </svg>
  )
}

/* ── Incognito Icon (replaces avatar) ── */
function IncognitoIcon() {
  return (
    <div className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-full bg-[#2c2c2e] border-[3px] border-[#48484a] flex items-center justify-center shadow-2xl">
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 md:w-20 md:h-20">
        {/* Hat */}
        <rect x="12" y="18" width="40" height="6" rx="3" fill="white" opacity="0.9" />
        <rect x="20" y="10" width="24" height="10" rx="3" fill="white" opacity="0.9" />
        {/* Glasses */}
        <circle cx="22" cy="36" r="9" stroke="white" strokeWidth="3" fill="none" opacity="0.9" />
        <circle cx="42" cy="36" r="9" stroke="white" strokeWidth="3" fill="none" opacity="0.9" />
        <path d="M31 36 Q32 32 33 36" stroke="white" strokeWidth="2.5" fill="none" opacity="0.9" />
        {/* Nose hint */}
        <path d="M32 42 L32 48" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      </svg>
    </div>
  )
}

/* ── Floating social mini icons ── */
function FloatingIcon({
  children,
  className,
  animClass,
  delay = "0s",
  zClass = "z-0",
}: {
  children: React.ReactNode
  className: string
  animClass: string
  delay?: string
  zClass?: string
}) {
  return (
    <div
      className={`absolute ${className} ${animClass} ${zClass}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  )
}

function SpotifyIcon() {
  return (
    <div className="w-[68px] h-[68px] rounded-[18px] bg-[#1DB954] flex items-center justify-center shadow-xl">
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="white">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
      </svg>
    </div>
  )
}

function YouTubeIcon() {
  return (
    <div className="w-[60px] h-[60px] rounded-full bg-[#FF0000] flex items-center justify-center shadow-xl">
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="white">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    </div>
  )
}

function InstagramIcon() {
  return (
    <div className="w-[64px] h-[64px] rounded-[16px] flex items-center justify-center shadow-xl" style={{ background: "linear-gradient(135deg, #833AB4, #FD1D1D, #F77737)" }}>
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="white">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    </div>
  )
}

function TikTokIcon() {
  return (
    <div className="w-[52px] h-[52px] rounded-full bg-[#010101] border border-[#3a3a3c] flex items-center justify-center shadow-xl">
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
    </div>
  )
}

function DiscordIcon() {
  return (
    <div className="w-[56px] h-[56px] rounded-[14px] bg-[#5865F2] flex items-center justify-center shadow-xl">
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="white">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
      </svg>
    </div>
  )
}

function TwitchIcon() {
  return (
    <div className="w-[52px] h-[52px] rounded-full bg-[#9146FF] flex items-center justify-center shadow-xl">
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white">
        <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/>
      </svg>
    </div>
  )
}

/* ── The animated scene with incognito + floating social icons ── */
function AnimatedScene() {
  return (
    <div className="relative w-[340px] h-[340px] md:w-[420px] md:h-[420px]">
      {/* Central incognito - always z-10 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <IncognitoIcon />
      </div>

      {/* Icons that go BEHIND the text (z-0) */}
      <FloatingIcon className="top-[2%] left-1/2 -translate-x-1/2" animClass="animate-float-1" zClass="z-0">
        <SpotifyIcon />
      </FloatingIcon>
      <FloatingIcon className="top-[14%] right-[4%]" animClass="animate-float-2" delay="0.5s" zClass="z-0">
        <TikTokIcon />
      </FloatingIcon>
      <FloatingIcon className="bottom-[14%] left-[8%]" animClass="animate-float-5" delay="0.8s" zClass="z-0">
        <TwitchIcon />
      </FloatingIcon>

      {/* Icons that go IN FRONT of the text (z-30) */}
      <FloatingIcon className="top-[44%] right-[0%]" animClass="animate-float-3" delay="1s" zClass="z-30">
        <InstagramIcon />
      </FloatingIcon>
      <FloatingIcon className="bottom-[8%] right-[12%]" animClass="animate-float-4" delay="0.3s" zClass="z-30">
        <YouTubeIcon />
      </FloatingIcon>
      <FloatingIcon className="top-[32%] left-[-4%]" animClass="animate-float-6" delay="0.2s" zClass="z-30">
        <DiscordIcon />
      </FloatingIcon>
    </div>
  )
}

/* ── Phase timing ── */
const BADGE_SHOW = 2000
const TRANSITION = 700
const SCENE_SHOW = 4000

type Phase = "badge" | "badge-out" | "scene" | "scene-out"

export function Hero() {
  const [phase, setPhase] = useState<Phase>("badge")

  useEffect(() => {
    let timeout: NodeJS.Timeout

    switch (phase) {
      case "badge":
        timeout = setTimeout(() => setPhase("badge-out"), BADGE_SHOW)
        break
      case "badge-out":
        timeout = setTimeout(() => setPhase("scene"), TRANSITION)
        break
      case "scene":
        timeout = setTimeout(() => setPhase("scene-out"), SCENE_SHOW)
        break
      case "scene-out":
        timeout = setTimeout(() => setPhase("badge"), TRANSITION)
        break
    }
    return () => clearTimeout(timeout)
  }, [phase])

  const badgeVisible = phase === "badge" || phase === "badge-out"
  const sceneVisible = phase === "scene" || phase === "scene-out"

  const badgeOpacity = phase === "badge" ? "opacity-100" : "opacity-0"
  const badgeScale = phase === "badge" ? "scale-100" : "scale-90"

  const sceneOpacity = phase === "scene" ? "opacity-100" : "opacity-0"
  const sceneScale = phase === "scene" ? "scale-100" : "scale-90"

  return (
    <section className="flex flex-col items-center justify-center pt-20 pb-8 px-6">
      {/* Morph container + text wrapper — icons can overlap the text */}
      <div className="relative mt-8 flex flex-col items-center">
        {/* Animation area */}
        <div className="relative h-[300px] md:h-[360px] w-[340px] md:w-[420px] flex items-center justify-center">
          {/* Badge layer */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${badgeOpacity} ${badgeScale}`}
            style={{ pointerEvents: badgeVisible ? "auto" : "none" }}
          >
            <RankBadge className="drop-shadow-2xl" />
          </div>

          {/* Animated scene layer */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${sceneOpacity} ${sceneScale}`}
            style={{ pointerEvents: sceneVisible ? "auto" : "none" }}
          >
            <AnimatedScene />
          </div>
        </div>

        {/* "Tier 2" text — z-20 so some icons go behind (z-0) and some in front (z-30) */}
        <h1 className="relative z-20 text-7xl md:text-[96px] font-semibold text-foreground tracking-tight -mt-4 mb-0">
          Tier 2
        </h1>
      </div>

      {/* Sign In button */}
      <a
        href="#"
        className="inline-flex items-center justify-center px-10 py-3.5 rounded-full bg-primary text-primary-foreground text-lg font-medium hover:bg-primary/90 transition-colors mt-10 mb-10 shadow-sm"
      >
        Sign In
      </a>

      {/* Tagline */}
      <p className="text-2xl md:text-[34px] font-semibold text-muted-foreground text-center leading-snug max-w-2xl text-balance">
        Made By Jordan M.
      </p>
    </section>
  )
}
