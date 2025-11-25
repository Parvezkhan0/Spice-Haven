"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-accent">
          Spice Haven
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="#menu" className="text-foreground hover:text-accent transition">
            Menu
          </Link>
          <Link href="#about" className="text-foreground hover:text-accent transition">
            About
          </Link>
          <Link href="#testimonials" className="text-foreground hover:text-accent transition">
            Reviews
          </Link>
          <button className="px-6 py-2 bg-accent text-background rounded-full font-semibold hover:opacity-90 transition">
            Reserve a Table
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <Link href="#menu" className="text-foreground hover:text-accent">
                Menu
              </Link>
              <Link href="#about" className="text-foreground hover:text-accent">
                About
              </Link>
              <Link href="#testimonials" className="text-foreground hover:text-accent">
                Reviews
              </Link>
              <button className="px-6 py-2 bg-accent text-background rounded-full font-semibold">
                Reserve a Table
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
