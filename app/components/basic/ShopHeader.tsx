'use client'

import useHeaderStore from '@/app/stores/header'
import React, { useEffect } from 'react'
import SettingIcon from '@/public/icon/setting.svg'
import DownArrowIcon from '@/public/icon/down-arrow.svg'

const ShopHeader = () => {
  const { setAdditionalHeaderContent } = useHeaderStore()

  const Header = () => (
    <div className="flex mt-[10px] h-[33px] z-[8000] px-[9px] items-end">
      <div className="h-[23px] px-[12px] py-[5px] bg-GREEN_800 items-center flex leading-[13.13px] tracking-[-0.025em] font-bold text-WHITE_1000 text-[11px] rounded-[50px] gap-[5.5px] mr-[16px] shadow-CARD_SHADOW">
        <SettingIcon />
        지역선택
        <DownArrowIcon />
      </div>
      <div className="bg-GREY_200 h-[20px] text-[10px] font-bold text-GREY_700 py-[4px] px-[10px] leading-[11.93px] tracking-[-0.025em] rounded-[50px] shadow-CARD_SHADOW">
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
