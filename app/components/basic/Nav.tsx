'use client'

import { usePathname } from 'next/navigation'
import React from 'react'
import HomeLogo from '@/public/icon/home.svg'
import Link from 'next/link'

type NavIcon = 'home' | 'my'

interface NavState {
  showNav: boolean
  icons: NavIcon[]
}

const NAV_CONFIG: Record<string, NavState> = {
  '/': {
    showNav: true,
    icons: ['home'],
  },
}

const Nav = () => {
  const pathname = usePathname()

  const { showNav, icons } = NAV_CONFIG[pathname] || {
    showNav: true,
    icons: [],
  }

  return (
    showNav &&
    icons.length > 0 && (
      <div className="fixed bottom-0 w-full max-w-screen h-[78px] items-center flex justify-center shadow-t-md rounded-tr-[20px] rounded-tl-[20px] bg-white pt-[16px] font-bold">
        {icons.map((icon) => (
          <React.Fragment key={icon}>
            {icon === 'home' && (
              <Link href="/">
                <div className="flex flex-col items-center">
                  <HomeLogo />
                  <div className="p-[6px] font-bold text-primary">홈</div>
                </div>
              </Link>
            )}
          </React.Fragment>
        ))}
      </div>
    )
  )
}

export default Nav
