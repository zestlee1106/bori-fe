'use client'

import { usePathname } from 'next/navigation'
import React from 'react'
import classnames from 'classnames'
import Image from 'next/image'
import Logo from '@/public/icon/logo.png'

interface HeaderState {
  showLogo: boolean
  backgroundColor: 'transparent' | 'white' | 'black'
  showBackButton: boolean
  position: 'fixed' | 'absolute'
}

const HEADER_CONFIG: Record<string, HeaderState> = {
  '/': {
    showLogo: true,
    backgroundColor: 'transparent',
    showBackButton: false,
    position: 'absolute',
  },
}

const Header = () => {
  const pathname = usePathname()

  const { showLogo, backgroundColor, showBackButton, position } = HEADER_CONFIG[pathname] || {
    showLogo: true,
    backgroundColor: 'transparent',
    showBackButton: false,
  }

  return (
    <header
      className={classnames('top-0 w-full max-w-screen h-[50px] items-center flex px-[29px]', {
        'bg-none': backgroundColor === 'transparent',
        'bg-white': backgroundColor === 'white',
        'bg-black': backgroundColor === 'black',
        fixed: position === 'fixed',
        absolute: position === 'absolute',
      })}
    >
      {showLogo && <Image className="w-[50px] h-[50px]" src={Logo} alt="logo" />}
      {showBackButton && <div>&lt;</div>}
    </header>
  )
}

export default Header
