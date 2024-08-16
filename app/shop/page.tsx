'use client'

import React from 'react'
import useToast from '@/app/hooks/toast'
import Shop from '@/app/components/container/Shop'

const CopyToastMessage = ({ text }: { text: string }) => {
  return (
    <div className="font-regular">
      <span className="font-semibold">{text}</span> 가 복사되었습니다.
    </div>
  )
}

const page = () => {
  const { toast } = useToast()

  const copyPhoneNumber = () => {
    toast(<CopyToastMessage text="전화번호" />)
  }

  const copyAddress = () => {
    toast(<CopyToastMessage text="주소" />)
  }

  return (
    <div>
      <div className="flex fixed top-header mt-[10px] h-[33px]">
        <div className="w-[85px] h-[23px] py-[5px] bg-GREEN_800 items-center flex">지역선택</div>
        <div>지역</div>
      </div>
      <div className="pt-[57px]">
        <Shop />
      </div>
    </div>
  )
}

export default page
