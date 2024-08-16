'use client'

import React from 'react'
import Shop from '@/app/components/container/Shop'

const page = () => {
  return (
    <div>
      <div className="flex fixed top-header mt-[10px] h-[33px z-[8000]">
        <div className="w-[85px] h-[23px] py-[5px] bg-GREEN_800 items-center flex">지역선택</div>
        <div>지역</div>
      </div>
      <div className="pt-[57px] flex flex-col gap-[12px]">
        <Shop />
        <Shop />
        <Shop />
        <Shop />
        <Shop />
        <Shop />
        <Shop />
        <Shop />
        <Shop />
        <Shop />
      </div>
    </div>
  )
}

export default page
