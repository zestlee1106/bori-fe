'use client'

import useHeaderStore from '@/app/stores/header'
import React, { useEffect } from 'react'

const ShopHeader = () => {
  const { setAdditionalHeaderContent } = useHeaderStore()

  const Header = () => (
    <div className="flex mt-[10px] h-[33px] z-[8000] px-[9px]">
      <div className="w-[85px] h-[23px] py-[5px] bg-GREEN_800 items-center flex">지역선택</div>
      <div>지역</div>
    </div>
  )

  useEffect(() => {
    setAdditionalHeaderContent(<Header />)

    return () => {
      setAdditionalHeaderContent(null)
    }
  }, [])

  return null
}

export default ShopHeader
