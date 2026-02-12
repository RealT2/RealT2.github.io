import {
  MailIcon,
  FindMyIcon,
  RemindersIcon,
  NotesIcon,
  FilesIcon,
  ContactsIcon,
  NumbersIcon,
  PagesIcon,
  PhotosIcon,
  KeynoteIcon,
} from "./app-icons"

function ICloudPlusCloud() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-64 h-48">
        {/* Main cloud */}
        <svg
          viewBox="0 0 260 180"
          fill="none"
          className="w-full h-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="plusCloudGrad" x1="130" y1="0" x2="130" y2="180" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#5AC8FA" />
              <stop offset="100%" stopColor="#007AFF" />
            </linearGradient>
          </defs>
          <ellipse cx="160" cy="75" rx="85" ry="65" fill="url(#plusCloudGrad)" />
          <ellipse cx="110" cy="90" rx="70" ry="58" fill="#5AC8FA" />
          <ellipse cx="75" cy="105" rx="52" ry="44" fill="#5AC8FA" opacity="0.9" />
          <rect x="45" y="110" width="175" height="42" rx="21" fill="url(#plusCloudGrad)" />
        </svg>

        {/* 12TB text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white">
            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2z" />
          </svg>
          <span className="text-3xl font-bold text-foreground">12TB</span>
        </div>

        {/* Floating icons around the cloud */}
        <div className="absolute -top-2 right-6 w-10 h-10 rounded-full bg-[#007AFF] flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
          </svg>
        </div>
        <div className="absolute bottom-8 -right-2 w-12 h-12 rounded-full bg-[#007AFF] flex items-center justify-center">
          <svg viewBox="0 0 56 56" fill="none" className="w-6 h-6">
            <path d="M8 18l20 14 20-14" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="8" y="16" width="40" height="26" rx="3" stroke="white" strokeWidth="3" fill="none" />
          </svg>
        </div>
      </div>
      <p className="text-2xl font-semibold text-accent mt-2">{"iCloud+"}</p>
    </div>
  )
}

export function Features() {
  return (
    <section className="px-4 md:px-8 lg:px-12 pb-20 pt-20">
      <div className="max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Left Card - Apps */}
        <div className="bg-card rounded-[20px] p-8 md:p-10 flex flex-col">
          <div className="grid grid-cols-5 gap-4 mb-3">
            <MailIcon />
            <FindMyIcon />
            <RemindersIcon />
            <NotesIcon />
            <FilesIcon />
          </div>
          <div className="grid grid-cols-5 gap-4 mb-10">
            <ContactsIcon />
            <NumbersIcon />
            <PagesIcon />
            <PhotosIcon />
            <KeynoteIcon />
          </div>
          <h2 className="text-xl md:text-[26px] font-bold text-foreground leading-tight mb-8">
            Easily access apps and data from your iPhone on the web
          </h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            iCloud is essential for keeping personal information from your devices safe, up to date, and available wherever you are. At iCloud.com, you can access your photos, files, and more from any web browser. Changes you make will sync to your iPhone and other devices, so you{"'"}re always up to date.
          </p>
        </div>

        {/* Right Card - iCloud+ */}
        <div className="bg-card rounded-[20px] p-8 md:p-10 flex flex-col">
          <div className="flex justify-center mb-4">
            <ICloudPlusCloud />
          </div>
          <h2 className="text-xl md:text-[26px] font-bold text-foreground leading-tight mb-8">
            More storage, plus features to protect your privacy and connect with friends
          </h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            Upgrade to iCloud+ to get more storage, plan events with Apple Invites, and have peace of mind with privacy features like iCloud Private Relay, Hide My Email, and HomeKit Secure Video. You can even share your subscription with your family. Learn more at{" "}
            <a href="https://apple.com/icloud" className="text-accent hover:underline">
              apple.com/icloud
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
