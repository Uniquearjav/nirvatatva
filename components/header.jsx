"use client"

import Link from "next/link"
import Logo  from '../public/nirvatatva.svg'
import Image from "next/image"
import { ModeToggle } from "./toggle_button"
import { usePathname } from "next/navigation"



export default function Component() {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <div className="w-full py-3 bg-background/90 fixed px-4 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              className="h-16 w-16"
            />
          </Link>
          <Link href="/" className="text-5xl font-semibold">
             Nirvatatva
          </Link>
        </div>
        <div className="hidden space-x-4 md:flex">
          <Link href="/" className="text-xl font-medium hover:font-semibold" prefetch={false}>
            Home
          </Link>
          <Link href="/store" className="text-xl font-medium hover:font-semibold" prefetch={false}>
            Store
          </Link>
          <Link href="#" className="text-xl font-medium hover:font-semibold" prefetch={false}>
            About
          </Link>
          <Link href="/Contact_Us" className="text-xl font-medium hover:font-semibold" prefetch={false}>
            Contact Us
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}