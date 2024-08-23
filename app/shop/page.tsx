import React from 'react'
import Shop from '@/app/components/container/Shop'
import ShopHeader from '@/app/components/basic/ShopHeader'

const page = () => {
  return (
    <div className="h-screen flex flex-col">
      <ShopHeader />
      <div className="flex-1 overflow-y-auto flex flex-col gap-[1.2rem] mt-[5.7rem] mb-[5.7rem]">
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
