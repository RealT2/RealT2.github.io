"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

function CloudIcon({ className }: { className?: string }) {
  return (
    <svg
      width="300"
      height="210"
      viewBox="0 0 300 210"
      fill="none"
      className={className}
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
      <ellipse cx="185" cy="88" rx="100" ry="78" fill="url(#cloudMain)" />
      <ellipse cx="130" cy="105" rx="82" ry="70" fill="url(#cloudLight)" />
      <ellipse cx="82" cy="122" rx="58" ry="50" fill="url(#cloudLight)" opacity="0.92" />
      <rect x="48" y="130" width="205" height="48" rx="24" fill="url(#cloudMain)" />
      <ellipse cx="185" cy="88" rx="100" ry="78" fill="url(#cloudShine)" />
      <ellipse cx="130" cy="105" rx="82" ry="70" fill="url(#cloudShine)" />
    </svg>
  )
}

function FloatingIcon({
  children,
  className,
  animClass,
  delay = "0s",
}: {
  children: React.ReactNode
  className: string
  animClass: string
  delay?: string
}) {
  return (
    <div
      className={`absolute ${className} ${animClass}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  )
}

function CloudMiniIcon() {
  return (
    <div className="w-[52px] h-[52px] rounded-full bg-[#2c2c2e] flex items-center justify-center shadow-xl border border-[#3a3a3c]">
      <svg viewBox="0 0 40 28" className="w-6 h-[18px]">
        <defs>
          <linearGradient id="miniCloudG" x1="20" y1="0" x2="20" y2="28" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#64D2FF" />
            <stop offset="100%" stopColor="#0A84FF" />
          </linearGradient>
        </defs>
        <ellipse cx="24" cy="11" rx="13" ry="10" fill="url(#miniCloudG)" />
        <ellipse cx="17" cy="14" rx="10" ry="9" fill="#5AC8FA" />
        <ellipse cx="12" cy="17" rx="8" ry="6.5" fill="#5AC8FA" opacity="0.9" />
        <rect x="7" y="16" width="27" height="8" rx="4" fill="url(#miniCloudG)" />
      </svg>
    </div>
  )
}

function PhotosMiniIcon() {
  return (
    <div className="w-[68px] h-[68px] rounded-[18px] bg-[#2c2c2e] flex items-center justify-center shadow-xl border border-[#3a3a3c] overflow-hidden">
      <svg viewBox="0 0 56 56" className="w-12 h-12">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const colors = ["#FF3B30", "#FF9500", "#FFCC00", "#34C759", "#5AC8FA", "#007AFF", "#5856D6", "#FF2D55"]
          const rad = (angle * Math.PI) / 180
          const x1 = 28 + 6 * Math.cos(rad)
          const y1 = 28 + 6 * Math.sin(rad)
          const x2 = 28 + 20 * Math.cos(rad)
          const y2 = 28 + 20 * Math.sin(rad)
          return (
            <ellipse
              key={i}
              cx={(x1 + x2) / 2}
              cy={(y1 + y2) / 2}
              rx="8"
              ry="4"
              fill={colors[i]}
              transform={`rotate(${angle}, ${(x1 + x2) / 2}, ${(y1 + y2) / 2})`}
              opacity="0.9"
            />
          )
        })}
      </svg>
    </div>
  )
}

function MailMiniIcon() {
  return (
    <div className="w-[56px] h-[56px] rounded-full bg-[#2c2c2e] flex items-center justify-center shadow-xl border border-[#3a3a3c]">
      <svg viewBox="0 0 40 30" fill="none" className="w-6 h-5">
        <rect x="2" y="2" width="36" height="26" rx="4" fill="#007AFF" />
        <path d="M2 6l18 12 18-12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    </div>
  )
}

function ContactMiniIcon() {
  return (
    <div className="w-[48px] h-[48px] rounded-full bg-[#2c2c2e] flex items-center justify-center shadow-xl border border-[#3a3a3c]">
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <circle cx="12" cy="9" r="4" fill="#FFD60A" />
        <ellipse cx="12" cy="20" rx="7" ry="5" fill="#FFD60A" />
      </svg>
    </div>
  )
}

function FindMyMiniIcon() {
  return (
    <div className="w-[48px] h-[48px] rounded-full bg-[#2c2c2e] flex items-center justify-center shadow-xl border border-[#3a3a3c]">
      <div className="w-7 h-7 rounded-full border-[2.5px] border-[#30D158] flex items-center justify-center relative">
        <div className="w-2.5 h-2.5 rounded-full bg-[#30D158]" />
        <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-[#30D158]/50" />
      </div>
    </div>
  )
}

function CalendarMiniIcon() {
  return (
    <div className="w-[56px] h-[56px] rounded-[16px] bg-[#2c2c2e] flex items-center justify-center shadow-xl border border-[#3a3a3c]">
      <div className="flex flex-col items-center leading-none">
        <span className="text-[10px] font-bold text-[#FF453A] uppercase tracking-wide">MON</span>
        <span className="text-[22px] font-bold text-foreground leading-none -mt-0.5">10</span>
      </div>
    </div>
  )
}

function AvatarScene() {
  return (
    <div className="relative w-[340px] h-[340px] md:w-[420px] md:h-[420px]">
      {/* Central avatar */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-full border-[3px] border-[#48484a] overflow-hidden shadow-2xl">
          <Image
            src="/memoji-avatar.jpg"
            alt="Memoji avatar"
            width={140}
            height={140}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Floating icons */}
      <FloatingIcon className="top-[3%] left-1/2 -translate-x-1/2" animClass="animate-float-1">
        <CloudMiniIcon />
      </FloatingIcon>
      <FloatingIcon className="top-[14%] right-[6%]" animClass="animate-float-2" delay="0.5s">
        <ContactMiniIcon />
      </FloatingIcon>
      <FloatingIcon className="top-[44%] right-[1%]" animClass="animate-float-3" delay="1s">
        <MailMiniIcon />
      </FloatingIcon>
      <FloatingIcon className="bottom-[10%] right-[14%]" animClass="animate-float-4" delay="0.3s">
        <CalendarMiniIcon />
      </FloatingIcon>
      <FloatingIcon className="bottom-[14%] left-[10%]" animClass="animate-float-5" delay="0.8s">
        <FindMyMiniIcon />
      </FloatingIcon>
      <FloatingIcon className="top-[30%] left-[-2%]" animClass="animate-float-6" delay="0.2s">
        <PhotosMiniIcon />
      </FloatingIcon>
    </div>
  )
}

// Phase durations in ms
const CLOUD_SHOW = 2000
const TRANSITION = 700
const AVATAR_SHOW = 4000

type Phase = "cloud" | "cloud-out" | "avatar" | "avatar-out"

export function Hero() {
  const [phase, setPhase] = useState<Phase>("cloud")

  useEffect(() => {
    let timeout: NodeJS.Timeout

    switch (phase) {
      case "cloud":
        timeout = setTimeout(() => setPhase("cloud-out"), CLOUD_SHOW)
        break
      case "cloud-out":
        timeout = setTimeout(() => setPhase("avatar"), TRANSITION)
        break
      case "avatar":
        timeout = setTimeout(() => setPhase("avatar-out"), AVATAR_SHOW)
        break
      case "avatar-out":
        timeout = setTimeout(() => setPhase("cloud"), TRANSITION)
        break
    }
    return () => clearTimeout(timeout)
  }, [phase])

  const cloudVisible = phase === "cloud" || phase === "cloud-out"
  const avatarVisible = phase === "avatar" || phase === "avatar-out"

  const cloudOpacity = phase === "cloud" ? "opacity-100" : "opacity-0"
  const cloudScale = phase === "cloud" ? "scale-100" : "scale-90"

  const avatarOpacity = phase === "avatar" ? "opacity-100" : "opacity-0"
  const avatarScale = phase === "avatar" ? "scale-100" : "scale-90"

  return (
    <section className="flex flex-col items-center justify-center pt-20 pb-8 px-6">
      {/* Morph container */}
      <div className="relative mb-0 mt-8 h-[340px] md:h-[420px] w-[340px] md:w-[420px] flex items-center justify-center">
        {/* Cloud layer */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${cloudOpacity} ${cloudScale}`}
          style={{ pointerEvents: cloudVisible ? "auto" : "none" }}
        >
          <CloudIcon className="drop-shadow-2xl" />
        </div>

        {/* Avatar scene layer */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${avatarOpacity} ${avatarScale}`}
          style={{ pointerEvents: avatarVisible ? "auto" : "none" }}
        >
          <AvatarScene />
        </div>
      </div>

      {/* iCloud text - always visible, not tied to animation */}
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
