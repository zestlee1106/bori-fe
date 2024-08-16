'use client'

import React, { useEffect } from 'react'
import useToast from '@/app/hooks/toast'

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
      <button onClick={copyPhoneNumber}>전번 복사</button>
      <button onClick={copyAddress}>주소 복사</button>
    </div>
  )
}

export default page
