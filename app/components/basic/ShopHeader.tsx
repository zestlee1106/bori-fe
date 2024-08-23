'use client'

import useHeaderStore from '@/app/stores/header'
import React, { useEffect } from 'react'
import SettingIcon from '@/public/icon/setting.svg'
import DownArrowIcon from '@/public/icon/down-arrow.svg'

const ShopHeader = () => {
  const { setAdditionalHeaderContent } = useHeaderStore()

  const Header = () => (
    <div className="flex mt-[1rem] z-[8000] px-[0.9rem] items-end">
      <div className="h-[2.3rem] px-[1.2rem] py-[0.5rem] bg-GREEN_800 items-center flex leading-[1.313rem] tracking-[-0.025em] font-bold text-WHITE_1000 text-[1.1rem] rounded-[5rem] gap-[0.55rem] mr-[1.6rem] shadow-CARD_SHADOW">
        <SettingIcon />
        지역선택
        <DownArrowIcon />
      </div>
      <div className="bg-GREY_200 h-[2rem] text-[1rem] font-bold text-GREY_700 py-[0.4rem] px-[1rem] leading-[1.193rem] tracking-[-0.025em] rounded-[5rem] shadow-CARD_SHADOW">
        전국
      </div>
    </div>
  )

  useEffect(() => {
    setAdditionalHeaderContent(<Header />)
    const originOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      setAdditionalHeaderContent(null)
      document.body.style.overflow = originOverflow
    }
  }, [])

  return null
}

export default ShopHeader
