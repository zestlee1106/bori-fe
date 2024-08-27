'use client'

import { usePathname } from 'next/navigation'
import React, { useMemo } from 'react'
import classnames from 'classnames'
import Image from 'next/image'
import Logo from '@/public/icon/logo.png'
import HomeIcon from '@/public/icon/home.svg'
import LeftArrowIcon from '@/public/icon/left-arrow.svg'
import { useRouter } from 'next/navigation'
import useHeaderStore from '@/app/stores/header'

interface HeaderItem {
  element: React.JSX.Element
  onClick?: 'navigateHome' | (() => void)
}

interface HeaderConfig {
  backgroundColor: 'transparent' | 'white' | 'black'
  position: 'fixed' | 'absolute'
  left: 'logo' | 'back'
  center: string | React.JSX.Element | null
  right: HeaderItem | null
  paddingX?: number
}

const ShopTitle = () => {
  return (
    <div className="font-pretendard font-extrabold text-[2.2rem]">
      지역별 <span className="text-GREEN_800">보청기 판매점</span> 모음
    </div>
  )
}

const HEADER_CONFIG: Record<string, HeaderConfig> = {
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
    right: {
      element: <HomeIcon />,
      onClick: 'navigateHome',
    },
    paddingX: 1.5,
  },
}

const Header = () => {
  const pathname = usePathname()
  const router = useRouter()

  const { left, center, right, backgroundColor, position, paddingX } = useMemo(() => {
    return (
      HEADER_CONFIG[pathname] || {
        left: 'logo',
        center: null,
        right: null,
        backgroundColor: 'transparent',
        position: 'absolute',
      }
    )
  }, [pathname])

  const { additionalHeaderContent } = useHeaderStore()

  /**
   * 뒤로가기 버튼 이벤트 핸들러
   */
  const handleBackClick = () => {
    router.back()
  }

  /**
   * 오른쪽 버튼 이벤트 핸들러
   * @description onClick에 설정된 동작을 실행함
   */
  const handleRightClick = () => {
    if (!right) {
      return false
    }

    if (right.onClick === 'navigateHome') {
      router.push('/')
    } else {
      right.onClick?.()
    }
  }

  return (
    <header
      className={classnames('top-0 w-full max-w-screen items-center flex', {
        'bg-none': backgroundColor === 'transparent',
        'bg-white': backgroundColor === 'white',
        'bg-black': backgroundColor === 'black',
        fixed: position === 'fixed',
        absolute: position === 'absolute',
      })}
      style={{
        paddingLeft: `${paddingX || '2.9'}rem`,
        paddingRight: `${paddingX || '2.9'}rem`,
      }}
    >
      <div className="flex w-full flex-col z-[800]">
        <div className="flex h-header justify-between items-center w-full">
          {left === 'logo' && <Image className="w-[5rem] h-[5rem]" src={Logo} alt="logo" />} {/* 50px -> 5rem */}
          {left === 'back' && (
            <div className="justify-start pl-[0.9rem] pr-[1.4rem] pt-[0.7rem] pb-[0.6rem]" onClick={handleBackClick}>
              <LeftArrowIcon />
            </div>
          )}
          {center && <div>{center}</div>}
          {right && (
            <div className="justify-end pl-[0.6rem] pr-[0.9rem] pt-[0.7rem] pb-[0.8rem]" onClick={handleRightClick}>
              {right.element}
            </div>
          )}
        </div>
        {additionalHeaderContent && additionalHeaderContent}
      </div>
    </header>
  )
}

export default Header
