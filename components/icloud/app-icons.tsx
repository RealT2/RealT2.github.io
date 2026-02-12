export function AppIcon({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-1" title={name}>
      <div className="w-14 h-14 rounded-[14px] flex items-center justify-center overflow-hidden">
        {children}
      </div>
    </div>
  )
}

export function MailIcon() {
  return (
    <AppIcon name="Mail">
      <div className="w-full h-full bg-[#1C8AFF] flex items-center justify-center">
        <svg viewBox="0 0 56 56" fill="none" className="w-10 h-10">
          <path d="M8 18l20 14 20-14" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <rect x="8" y="16" width="40" height="26" rx="3" stroke="white" strokeWidth="2.5" fill="none" />
        </svg>
      </div>
    </AppIcon>
  )
}

export function FindMyIcon() {
  return (
    <AppIcon name="Find My">
      <div className="w-full h-full bg-[#2CD058] flex items-center justify-center relative">
        <div className="w-8 h-8 rounded-full border-[3px] border-white flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-white" />
        </div>
        <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-white/60" />
      </div>
    </AppIcon>
  )
}

export function RemindersIcon() {
  return (
    <AppIcon name="Reminders">
      <div className="w-full h-full bg-foreground flex items-center justify-center">
        <svg viewBox="0 0 56 56" className="w-10 h-10">
          <circle cx="14" cy="18" r="3.5" fill="#FF6B35" />
          <circle cx="14" cy="28" r="3.5" fill="#5856D6" />
          <circle cx="14" cy="38" r="3.5" fill="#34C759" />
          <rect x="22" y="16" width="22" height="3" rx="1.5" fill="#888" />
          <rect x="22" y="26" width="22" height="3" rx="1.5" fill="#888" />
          <rect x="22" y="36" width="22" height="3" rx="1.5" fill="#888" />
        </svg>
      </div>
    </AppIcon>
  )
}

export function NotesIcon() {
  return (
    <AppIcon name="Notes">
      <div className="w-full h-full bg-[#FFD60A] flex items-center justify-center">
        <svg viewBox="0 0 56 56" className="w-10 h-10">
          <rect x="12" y="10" width="32" height="36" rx="4" fill="#FFFDE0" />
          <rect x="16" y="18" width="24" height="2.5" rx="1" fill="#C7A100" />
          <rect x="16" y="24" width="24" height="2.5" rx="1" fill="#C7A100" />
          <rect x="16" y="30" width="18" height="2.5" rx="1" fill="#C7A100" />
        </svg>
      </div>
    </AppIcon>
  )
}

export function FilesIcon() {
  return (
    <AppIcon name="Files">
      <div className="w-full h-full bg-gradient-to-b from-[#5AC8FA] to-[#007AFF] flex items-center justify-center">
        <svg viewBox="0 0 56 56" className="w-10 h-10">
          <rect x="10" y="18" width="36" height="26" rx="3" fill="white" fillOpacity="0.9" />
          <path d="M10 18h14l3-6h9l3 6h-29z" fill="white" fillOpacity="0.7" />
        </svg>
      </div>
    </AppIcon>
  )
}

export function ContactsIcon() {
  return (
    <AppIcon name="Contacts">
      <div className="w-full h-full bg-[#8E8E93] flex items-center justify-center">
        <svg viewBox="0 0 56 56" className="w-10 h-10">
          <circle cx="28" cy="22" r="9" fill="white" fillOpacity="0.8" />
          <path d="M12 46c0-10 7-16 16-16s16 6 16 16" fill="white" fillOpacity="0.8" />
        </svg>
      </div>
    </AppIcon>
  )
}

export function NumbersIcon() {
  return (
    <AppIcon name="Numbers">
      <div className="w-full h-full bg-[#34C759] flex items-center justify-center">
        <svg viewBox="0 0 56 56" className="w-10 h-10">
          <rect x="12" y="30" width="8" height="14" rx="2" fill="white" />
          <rect x="24" y="22" width="8" height="22" rx="2" fill="white" />
          <rect x="36" y="14" width="8" height="30" rx="2" fill="white" />
        </svg>
      </div>
    </AppIcon>
  )
}

export function PagesIcon() {
  return (
    <AppIcon name="Pages">
      <div className="w-full h-full bg-[#FF9500] flex items-center justify-center">
        <svg viewBox="0 0 56 56" className="w-10 h-10">
          <path d="M20 12h12l10 10v22a4 4 0 01-4 4H20a4 4 0 01-4-4V16a4 4 0 014-4z" fill="white" fillOpacity="0.9" />
          <path d="M32 12v10h10" fill="none" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" />
          <rect x="22" y="26" width="14" height="2" rx="1" fill="#FF9500" />
          <rect x="22" y="32" width="10" height="2" rx="1" fill="#FF9500" />
        </svg>
      </div>
    </AppIcon>
  )
}

export function PhotosIcon() {
  return (
    <AppIcon name="Photos">
      <div className="w-full h-full flex items-center justify-center bg-foreground overflow-hidden">
        <svg viewBox="0 0 56 56" className="w-12 h-12">
          <circle cx="28" cy="28" r="20" fill="none" />
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
                opacity="0.85"
              />
            )
          })}
        </svg>
      </div>
    </AppIcon>
  )
}

export function KeynoteIcon() {
  return (
    <AppIcon name="Keynote">
      <div className="w-full h-full bg-[#007AFF] flex items-center justify-center">
        <svg viewBox="0 0 56 56" className="w-10 h-10">
          <rect x="10" y="14" width="36" height="22" rx="3" fill="white" fillOpacity="0.9" />
          <rect x="22" y="36" width="12" height="3" rx="1" fill="white" fillOpacity="0.7" />
          <rect x="18" y="39" width="20" height="2" rx="1" fill="white" fillOpacity="0.7" />
        </svg>
      </div>
    </AppIcon>
  )
}
