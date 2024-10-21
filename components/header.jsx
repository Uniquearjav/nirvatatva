"use client"

import Link from "next/link"
import Logo  from '../public/nirvatatva.svg'
import Image from "next/image"
import { ModeToggle } from "./toggle_button"
import { usePathname } from "next/navigation"

export default function Component() {
  const links = {
    'Home': '/',
    'About': '/about',
    'Store': '/store',
    'Contact Us': '/contact_us'
  }
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
          {Object.entries(links).map((name, i) => (
          <Link key={name} href={name[1]} className={`text-xl font-medium hover:font-semibold ${pathname === links[name[1]] ? 'font-semibold text-blue-600' : ''}`} 
          prefetch={false}>
            {name[0]}
          </Link>
          ))}
          
        
        </div>
        <div className="flex items-center space-x-2">
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}
