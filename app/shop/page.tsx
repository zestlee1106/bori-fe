import React from 'react'
import Shop from '@/app/components/container/Shop'
import ShopHeader from '@/app/components/basic/ShopHeader'

const page = () => {
  return (
    <div>
      <ShopHeader />
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
