"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

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
          <linearGradient id="miniCloud" x1="20" y1="0" x2="20" y2="28" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#64D2FF" />
            <stop offset="100%" stopColor="#0A84FF" />
          </linearGradient>
        </defs>
        <ellipse cx="24" cy="11" rx="13" ry="10" fill="url(#miniCloud)" />
        <ellipse cx="17" cy="14" rx="10" ry="9" fill="#5AC8FA" />
        <ellipse cx="12" cy="17" rx="8" ry="6.5" fill="#5AC8FA" opacity="0.9" />
        <rect x="7" y="16" width="27" height="8" rx="4" fill="url(#miniCloud)" />
      </svg>
    </div>
  )
}

function PhotosMiniIcon() {
  return (
    <div className="w-[68px] h-[68px] rounded-[18px] bg-[#2c2c2e] flex items-center justify-center shadow-xl border border-[#3a3a3c] overflow-hidden">
      <svg viewBox="0 0 56 56" className="w-12 h-12">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const colors = ['#FF3B30', '#FF9500', '#FFCC00', '#34C759', '#5AC8FA', '#007AFF', '#5856D6', '#FF2D55']
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

export function VideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center py-16 md:py-28 overflow-hidden"
    >
      <div
        className={`relative w-[340px] h-[340px] md:w-[480px] md:h-[480px] transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Central avatar */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full border-[3px] border-[#48484a] overflow-hidden shadow-2xl">
            <Image
              src="/memoji-avatar.jpg"
              alt="Memoji avatar"
              width={150}
              height={150}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Floating icons around center */}
        <FloatingIcon
          className="top-[3%] left-1/2 -translate-x-1/2"
          animClass="animate-float-1"
        >
          <CloudMiniIcon />
        </FloatingIcon>

        <FloatingIcon
          className="top-[14%] right-[6%]"
          animClass="animate-float-2"
          delay="0.5s"
        >
          <ContactMiniIcon />
        </FloatingIcon>

        <FloatingIcon
          className="top-[44%] right-[1%]"
          animClass="animate-float-3"
          delay="1s"
        >
          <MailMiniIcon />
        </FloatingIcon>

        <FloatingIcon
          className="bottom-[10%] right-[14%]"
          animClass="animate-float-4"
          delay="0.3s"
        >
          <CalendarMiniIcon />
        </FloatingIcon>

        <FloatingIcon
          className="bottom-[14%] left-[10%]"
          animClass="animate-float-5"
          delay="0.8s"
        >
          <FindMyMiniIcon />
        </FloatingIcon>

        <FloatingIcon
          className="top-[30%] left-[-2%]"
          animClass="animate-float-6"
          delay="0.2s"
        >
          <PhotosMiniIcon />
        </FloatingIcon>
      </div>
    </section>
  )
}
