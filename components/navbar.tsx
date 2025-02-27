import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between ">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl">Navigation</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="transition-colors hover:text-primary">
              Accueil
            </Link>
            <Link href="/services" className="transition-colors hover:text-primary">
              Services
            </Link>
            <Link href="/portfolio" className="transition-colors hover:text-primary">
              Portfolio
            </Link>
            <Link href="/a-propos" className="transition-colors hover:text-primary">
              À propos
            </Link>
            <Link href="/contact" className="transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
        <ThemeToggle />
      </div>
    </header>
  )
}

