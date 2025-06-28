import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="w-full">
      <Alert className="bg-banner-gradient border-none text-white rounded-none font-figtree py-2.5">
        <AlertDescription className="text-center text-base md:text-lg lg:text-[1.375rem] font-extrabold container mx-auto text-white block">
          🚀{" "}
          <span className="font-extrabold text-secondary">
            FRESH BEGINNINGS SALE:
          </span>{" "}
          Extra 25% OFF, Limited Spots - start your journey today!
        </AlertDescription>
      </Alert>

      <nav className="text-white px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="relative h-12 w-28 lg:h-16 lg:w-44 md:static absolute left-1/2 transform -translate-x-1/2 z-10"
          >
            <Image
              src="/assets/svg/logo.svg"
              alt="Fametonic Logo"
              fill={true}
              className="object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8 text-menu font-figtree font-semibold text-lg">
            <Link href="#" className="hover:text-tertiary transition-colors">
              About us
            </Link>
            <Link href="#" className="hover:text-tertiary transition-colors">
              Contact
            </Link>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="md:hidden text-white relative z-20 p-3"
              >
                <div className="flex flex-col gap-1">
                  <div className="w-6 h-0.5 bg-white"></div>
                  <div className="w-6 h-0.5 bg-white"></div>
                  <div className="w-6 h-0.5 bg-white"></div>
                </div>
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-black border-gray-800 [&_button]:text-white [&_button]:hover:text-gray-300"
            >
              <div className="flex flex-col space-y-2.5 mt-8 px-4 font-figtree tracking-tight">
                <Link
                  href="#"
                  className="text-white hover:text-gray-300 transition-colors font-medium text-lg"
                >
                  About us
                </Link>
                <Link
                  href="#"
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
  );
};

export default Header;
