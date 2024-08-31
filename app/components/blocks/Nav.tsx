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
        className="fixed bottom-0 w-full max-w-screen h-[5.1rem] items-center flex justify-center rounded-tr-[2rem] rounded-tl-[2rem] bg-white font-bold"
        style={{ boxShadow: '0px -0.4rem 2rem rgba(147, 156, 169, 0.2)' }}
      >
        {icons.map((icon) => (
          <React.Fragment key={icon}>
            {icon === 'home' && (
              <Link href="/">
                <div className="relative flex flex-col items-center w-[6rem] h-[6rem]">
                  <div
                    className="absolute -top-[2.4rem] flex flex-col items-center bg-white rounded-full py-[0.9rem] px-[1.9rem]"
                    style={{ boxShadow: '0px 0.4rem 2rem rgba(147, 156, 169, 0.2)' }}
                  >
                    <HomeLogo />
                    <div className="font-bold text-GREEN_800 text-[1.2rem] pt-[0.4rem]">홈</div>
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
