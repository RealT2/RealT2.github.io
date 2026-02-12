import { MoreHorizontal } from "lucide-react"

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-3 bg-background/80 backdrop-blur-xl">
      <div className="flex items-center gap-2">
        <svg
          className="h-5 w-5 text-foreground"
          viewBox="0 0 814 1000"
          fill="currentColor"
          aria-label="Apple logo"
        >
          <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57.8-155.5-127.4c-58.8-82-106.1-209.3-106.1-330.8 0-194.3 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8.7 15.6 1.3 18.2 2.6.4 6.5 1.3 10.4 1.3 45.3 0 103.6-30.4 139.3-71.5z" />
        </svg>
        <span className="text-sm font-normal text-foreground">iCloud</span>
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
