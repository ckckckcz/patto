"use client"

import Link from "next/link"
import { Atom, Search, Menu, Download, AppWindow } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-screen-xl font-sora font-bold">
      <nav className="relative flex items-center justify-between px-6 py-4 bg-gray-100/10 backdrop-blur-xl rounded-full">
        {/* Logo (Left Aligned) */}
        <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
          <Atom className="h-6 w-6 text-white" /> {/* Placeholder ikon */}
          <span className="text-xl font-semibold text-white whitespace-nowrap">Kanso</span>
        </Link>

        {/* Home & Docs Links (Centered for Desktop) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-6">
          <Link href="#" className="text-white hover:text-gray-300 transition-colors">
            Pricing
          </Link>
          <Link href="#" className="text-white hover:text-gray-300 transition-colors">
            Docs
          </Link>
        </div>

        {/* Download Button, Search Icon, Mobile Trigger (Right Aligned) */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="default"
              className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-bold rounded-full px-4 py-2 text-sm"
            >
              <AppWindow/>
              Download
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
                aria-label="Open main menu"
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-gray-900 text-white border-r border-gray-700">
              <nav className="flex flex-col gap-4 py-6">
                <Link href="#" className="block py-2 px-3 hover:bg-gray-700 rounded-md">
                  Home
                </Link>
                <Link href="#" className="block py-2 px-3 hover:bg-gray-700 rounded-md">
                  Docs
                </Link>
                <Button
                  variant="default"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-3 py-2 text-sm font-medium justify-start"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button variant="ghost" className="justify-start text-white hover:bg-gray-700">
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  )
}
