import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const Header = () => {
  return (
    <header className="w-full">

      <Alert className="bg-gradient-to-r from-primary to-secondary border-none text-white rounded-none font-figtree">
        <AlertDescription className="text-center text-base md:text-lg lg:text-[1.375rem] font-extrabold container mx-auto text-white block">
          🚀 <span className="font-bold text-secondary">FRESH BEGINNINGS SALE:</span> Extra 25% OFF, Limited Spots - start your journey today!
        </AlertDescription>
      </Alert>


      <nav className="bg-black text-white px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="relative h-16 w-44">
            <Image 
              src="/assets/svg/logo.svg" 
              alt="Fametonic Logo" 
              fill={true}
              className="object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8 text-menu">
            <Link 
              href="/about" 
              className="hover:text-tertiary transition-colors font-medium"
            >
              About us
            </Link>
            <Link 
              href="/contact" 
              className="hover:text-tertiary transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden text-white">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-gray-800">
              <div className="flex flex-col space-y-6 mt-8">
                <Link 
                  href="/about" 
                  className="text-white hover:text-gray-300 transition-colors font-medium text-lg"
                >
                  About us
                </Link>
                <Link 
                  href="/contact" 
                  className="text-white hover:text-gray-300 transition-colors font-medium text-lg"
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}

export default Header
