'use client'

import { usePathname } from 'next/navigation'
import React, { useMemo } from 'react'
import classnames from 'classnames'
import Image from 'next/image'
import Logo from '@/public/icon/logo.png'
import HomeIcon from '@/public/icon/home.svg'
import LeftArrowIcon from '@/public/icon/left-arrow.svg'
import { useRouter } from 'next/navigation'

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
    <div className="font-pretendard font-extrabold text-[22px]">
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
    paddingX: 15,
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
      className={classnames('top-0 w-full max-w-screen h-header items-center flex', {
        'bg-none': backgroundColor === 'transparent',
        'bg-white': backgroundColor === 'white',
        'bg-black': backgroundColor === 'black',
        fixed: position === 'fixed',
        absolute: position === 'absolute',
      })}
      style={{
        paddingLeft: paddingX || '29px',
        paddingRight: paddingX || '29px',
      }}
    >
      <div className="flex justify-between items-center w-full">
        {left === 'logo' && <Image className="w-[50px] h-[50px]" src={Logo} alt="logo" />}
        {left === 'back' && (
          <div className="justify-start pl-[9px] pr-[14px] pt-[7px] pb-[6px]" onClick={handleBackClick}>
            <LeftArrowIcon />
          </div>
        )}
        {center && <div>{center}</div>}
        {right && (
          <div className="justify-end pl-[6px] pr-[9px] pt-[7px] pb-[8px]" onClick={handleRightClick}>
            {right.element}
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
