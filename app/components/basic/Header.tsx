'use client'

import { usePathname } from 'next/navigation'
import React from 'react'
import classnames from 'classnames'
import Image from 'next/image'
import Logo from '@/public/icon/logo.png'
import HomeIcon from '@/public/icon/home.svg'
import LeftArrowIcon from '@/public/icon/left-arrow.svg'

interface HeaderState {
  backgroundColor: 'transparent' | 'white' | 'black'
  position: 'fixed' | 'absolute'
  left: 'logo' | 'back'
  center: string | React.JSX.Element | null
  right: 'hamburger' | React.JSX.Element | null
}

const ShopTitle = () => {
  return (
    <div className="font-pretendard font-extrabold text-[22px]">
      지역별 <span className="text-GREEN_800">보청기 판매점</span> 모음
    </div>
  )
}

const HEADER_CONFIG: Record<string, HeaderState> = {
  '/': {
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 'logo',
    center: null,
    right: null,
  },

  '/shop': {
    backgroundColor: 'transparent',
    position: 'fixed',
    left: 'back',
    center: <ShopTitle />,
    right: <HomeIcon />,
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
      <div className="flex justify-between items-center w-full">
        {left === 'logo' && <Image className="w-[50px] h-[50px]" src={Logo} alt="logo" />}
        {left === 'back' && (
          <div className="justify-start">
            <LeftArrowIcon />
          </div>
        )}
        {center && <div>{center}</div>}
        {right && <div className="justify-end">{right}</div>}
      </div>
    </header>
  )
}

export default Header
