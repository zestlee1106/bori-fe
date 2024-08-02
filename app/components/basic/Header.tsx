'use client'

import { usePathname } from 'next/navigation'
import React from 'react'
import classnames from 'classnames'
import Image from 'next/image'
import Logo from '@/public/icon/logo.png'

interface HeaderState {
  backgroundColor: 'transparent' | 'white' | 'black'
  position: 'fixed' | 'absolute'
  left: 'logo' | 'back'
  center: string | null
  right: 'hamburger' | null
}

const HEADER_CONFIG: Record<string, HeaderState> = {
  '/': {
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 'logo',
    center: null,
    right: null,
  },
}

const Header = () => {
  const pathname = usePathname()

  const { left, center, right, backgroundColor, position } = HEADER_CONFIG[pathname] || {
    showLogo: true,
    backgroundColor: 'transparent',
    showBackButton: false,
  }

  return (
    <header
      className={classnames('top-0 w-full max-w-screen h-header items-center flex px-[29px]', {
        'bg-none': backgroundColor === 'transparent',
        'bg-white': backgroundColor === 'white',
        'bg-black': backgroundColor === 'black',
        fixed: position === 'fixed',
        absolute: position === 'absolute',
      })}
    >
      {left === 'logo' && <Image className="w-[50px] h-[50px]" src={Logo} alt="logo" />}
      {left === 'back' && <div>&lt;</div>}
      {center && <div>{center}</div>}
    </header>
  )
}

export default Header
