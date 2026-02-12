export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">
            System Status
          </a>
          <span className="text-border">|</span>
          <a href="#" className="hover:text-foreground transition-colors">
            Privacy Policy
          </a>
          <span className="text-border">|</span>
          <a href="#" className="hover:text-foreground transition-colors">
            Terms & Conditions
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          {"Copyright \u00A9 2026 Apple Inc. All rights reserved."}
        </p>
      </div>
    </footer>
  )
}
