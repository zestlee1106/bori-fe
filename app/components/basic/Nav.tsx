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
      <div
        className="fixed bottom-0 w-full max-w-screen h-[51px] items-center flex justify-center rounded-tr-[20px] rounded-tl-[20px] bg-white font-bold"
        style={{ boxShadow: '0px -4px 20px rgba(147, 156, 169, 0.2)' }}
      >
        {icons.map((icon) => (
          <React.Fragment key={icon}>
            {icon === 'home' && (
              <Link href="/">
                <div className="relative flex flex-col items-center w-[60px] h-[60px]">
                  <div
                    className="absolute -top-[24px] flex flex-col items-center bg-white rounded-full py-[9px] px-[19px]"
                    style={{ boxShadow: '0px 4px 20px rgba(147, 156, 169, 0.2)' }}
                  >
                    <HomeLogo />
                    <div className="font-bold text-primary text-[12px] pt-[4px]">홈</div>
                  </div>
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
