"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-zinc-800">
      <div className="container mx-auto py-4 px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Link href="/">
            <span className="text-2xl font-bold text-purple-500">Syntaxual</span>
          </Link>
        </div>
        <nav className="flex flex-wrap justify-center gap-2 md:gap-6">
          <Link
            href="/"
            className={`${pathname === "/" ? "text-white" : "text-white/80"} hover:text-white transition-colors`}
          >
            Home
          </Link>
          <Link href="/#features" className="text-white/80 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="/#about" className="text-white/80 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/#contact" className="text-white/80 hover:text-white transition-colors">
            Contact
          </Link>
          <Link
            href="/signin"
            className={`${pathname === "/signin" ? "text-white" : "text-white/80"} hover:text-white transition-colors`}
          >
            Sign In
          </Link>
        </nav>
      </div>
    </header>
  )
}

