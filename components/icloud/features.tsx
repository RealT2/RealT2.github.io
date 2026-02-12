function AppIcon({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-1" title={name}>
      <div className="w-14 h-14 rounded-[14px] flex items-center justify-center overflow-hidden">
        {children}
      </div>
    </div>
  )
}

function SpotifyCardIcon() {
  return (
    <AppIcon name="Spotify">
      <div className="w-full h-full bg-[#1DB954] flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="white">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
        </svg>
      </div>
    </AppIcon>
  )
}

function YouTubeCardIcon() {
  return (
    <AppIcon name="YouTube">
      <div className="w-full h-full bg-[#FF0000] flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="white">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      </div>
    </AppIcon>
  )
}

function InstagramCardIcon() {
  return (
    <AppIcon name="Instagram">
      <div className="w-full h-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #833AB4, #FD1D1D, #F77737)" }}>
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="white">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      </div>
    </AppIcon>
  )
}

function DiscordCardIcon() {
  return (
    <AppIcon name="Discord">
      <div className="w-full h-full bg-[#5865F2] flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="white">
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
        </svg>
      </div>
    </AppIcon>
  )
}

function TwitchCardIcon() {
  return (
    <AppIcon name="Twitch">
      <div className="w-full h-full bg-[#9146FF] flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="white">
          <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" />
        </svg>
      </div>
    </AppIcon>
  )
}

function TikTokCardIcon() {
  return (
    <AppIcon name="TikTok">
      <div className="w-full h-full bg-[#010101] border border-[#3a3a3c] flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="white">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      </div>
    </AppIcon>
  )
}

function SnapchatCardIcon() {
  return (
    <AppIcon name="Snapchat">
      <div className="w-full h-full bg-[#FFFC00] flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#111">
          <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12.966-.27.161-.08.303-.124.446-.124.21 0 .405.09.541.27.164.209.166.479.003.681-.067.08-.31.33-.891.51-.263.076-.455.12-.577.146-.23.06-.373.12-.433.27-.047.12-.03.27.05.42a6.97 6.97 0 001.29 1.81c.35.36.78.72 1.26 1.02.24.15.48.27.51.33.12.15.12.33.029.48-.075.12-.24.24-.48.3-.36.105-.78.15-1.11.18a.63.63 0 00-.196.054c-.12.06-.105.21-.2.405-.03.06-.075.18-.166.33-.135.24-.36.24-.51.24h-.006c-.24 0-.51-.06-.78-.12-.24-.06-.45-.12-.69-.12-.09 0-.165.015-.24.03-.285.06-.555.27-.87.45-.57.33-1.29.72-2.34.72h-.06c-1.05 0-1.77-.39-2.34-.72-.315-.18-.585-.39-.87-.45a1.07 1.07 0 00-.24-.03c-.24 0-.45.06-.69.12-.255.06-.525.12-.765.12h-.015c-.15 0-.375 0-.51-.24a1.33 1.33 0 01-.166-.33c-.09-.18-.09-.345-.195-.405a.628.628 0 00-.2-.054c-.33-.03-.75-.075-1.11-.18-.24-.06-.39-.18-.48-.3-.09-.15-.09-.33.03-.48.03-.06.27-.18.51-.33.48-.3.915-.66 1.26-1.02a6.97 6.97 0 001.29-1.81c.076-.15.09-.3.046-.42-.06-.15-.21-.21-.436-.27a4.26 4.26 0 01-.572-.146c-.57-.18-.825-.42-.891-.51-.165-.21-.165-.48 0-.69.135-.18.33-.27.54-.27.135 0 .285.045.436.12.324.15.675.255.975.27.21 0 .33-.045.4-.09l-.03-.51-.002-.06c-.105-1.62-.225-3.654.3-4.848C7.847 1.07 11.217.793 12.206.793z" />
        </svg>
      </div>
    </AppIcon>
  )
}

function XCardIcon() {
  return (
    <AppIcon name="X">
      <div className="w-full h-full bg-[#000000] border border-[#3a3a3c] flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="white">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </div>
    </AppIcon>
  )
}

function RedditCardIcon() {
  return (
    <AppIcon name="Reddit">
      <div className="w-full h-full bg-[#FF4500] flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="white">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
        </svg>
      </div>
    </AppIcon>
  )
}

function Tier2PlusBadge() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-64 h-48">
        <svg
          viewBox="0 0 260 280"
          fill="none"
          className="w-full h-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="plusBadgeGrad" x1="130" y1="0" x2="130" y2="280" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#64D2FF" />
              <stop offset="50%" stopColor="#0A84FF" />
              <stop offset="100%" stopColor="#0050D0" />
            </linearGradient>
            <linearGradient id="plusBadgeInner" x1="130" y1="40" x2="130" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#5AC8FA" />
              <stop offset="100%" stopColor="#007AFF" />
            </linearGradient>
          </defs>
          <path
            d="M130 16 L240 60 L240 160 C240 210 190 256 130 272 C70 256 20 210 20 160 L20 60 Z"
            fill="url(#plusBadgeGrad)"
          />
          <path
            d="M130 32 L226 70 L226 158 C226 202 182 242 130 256 C78 242 34 202 34 158 L34 70 Z"
            fill="url(#plusBadgeInner)"
          />
          <path
            d="M130 80 L142 118 L182 118 L150 142 L162 180 L130 158 L98 180 L110 142 L78 118 L118 118 Z"
            fill="white"
            opacity="0.95"
          />
        </svg>
        {/* Floating icons around the badge */}
        <div className="absolute -top-2 right-4 w-10 h-10 rounded-full bg-[#007AFF] flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
          </svg>
        </div>
        <div className="absolute bottom-8 -right-2 w-12 h-12 rounded-full bg-[#007AFF] flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
          </svg>
        </div>
      </div>
      <p className="text-2xl font-semibold text-accent mt-2">{"Tier 2+"}</p>
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
            <SpotifyCardIcon />
            <YouTubeCardIcon />
            <InstagramCardIcon />
            <TikTokCardIcon />
            <DiscordCardIcon />
          </div>
          <div className="grid grid-cols-5 gap-4 mb-10">
            <TwitchCardIcon />
            <SnapchatCardIcon />
            <XCardIcon />
            <RedditCardIcon />
            <AppIcon name="Steam">
              <div className="w-full h-full bg-[#1B2838] border border-[#3a3a3c] flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-8 h-8" fill="white">
                  <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 12-5.373 12-12s-5.372-12-12-12zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303a3.01 3.01 0 0 0-3.015-3.015 3.01 3.01 0 0 0-3.015 3.015 3.01 3.01 0 0 0 3.015 3.015 3.01 3.01 0 0 0 3.015-3.015zm-5.273-.005c0-1.264 1.018-2.285 2.275-2.285 1.258 0 2.271 1.021 2.271 2.285s-1.013 2.285-2.271 2.285c-1.257 0-2.275-1.021-2.275-2.285z" />
                </svg>
              </div>
            </AppIcon>
          </div>
          <h2 className="text-xl md:text-[26px] font-bold text-foreground leading-tight mb-8">
            Games that actually work, better than anywhere else
          </h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            Over 90% of the games on Tier 2 are fully functional and load faster than any other site out there. No broken links, no half-working embeds. Every game is tested and maintained so you can jump in and play without the headaches you get everywhere else.
          </p>
        </div>

        {/* Right Card - Tier 2+ */}
        <div className="bg-card rounded-[20px] p-8 md:p-10 flex flex-col">
          <div className="flex justify-center mb-4">
            <Tier2PlusBadge />
          </div>
          <h2 className="text-xl md:text-[26px] font-bold text-foreground leading-tight mb-8">
            Top-notch quality with apps, proxies, and more
          </h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            Tier 2 isn{"'"}t just games. Browse through a massive library of apps, proxies, and tools all built with quality in mind. Whether you need to bypass restrictions, access your favorite platforms, or find something new, Tier 2 has it all in one clean, reliable place.
          </p>
        </div>
      </div>
    </section>
  )
}
