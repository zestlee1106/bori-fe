'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

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
      <div className="fixed bottom-0 w-full max-w-screen h-[78px] items-center flex justify-center shadow-t-md rounded-r-[20px] rounded-l-[20px] bg-white">
        {icons.map((icon) => (
          <React.Fragment key={icon}>{icon === 'home' && <div>{icon}</div>}</React.Fragment>
        ))}
      </div>
    )
  )
}

export default Nav
