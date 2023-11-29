'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Image from 'next/image'
import { Button } from '../ui/button'
import { useRouter } from 'next/router'

export default function Header() {
    const router = useRouter()
  const [top, setTop] = useState<boolean>(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }  

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  
  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-100 ease-in-out ${!top ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {!top ? <Image src="/name_logo.png"
              width={80}
              height={40}
              className="h-auto w-auto"
              alt="GoalTac Logo"/> : <Image src="/black_name_logo.png"
              width={80}
              height={40}
              className="h-auto w-auto"
              alt="GoalTac Logo"/> }
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex gap-3 grow justify-end flex-wrap items-center">
              <li>
                <Button onClick={()=>router.push('/login')}
                    className="px-4 py-2 mt-2 text-md font-bold">
                    Login
                </Button>  
            </li>
            <li>
                <Button onClick={()=>router.push('/signup')} variant='outline'
                    className="px-4 py-2 mt-2 text-black border-black text-md font-bold bg-transparent">
                    Sign Up
                </Button>
            </li>
            </ul>

          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}