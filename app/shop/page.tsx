'use client'

import React, { useEffect } from 'react'
import useToast from '@/app/hooks/toast'

const ToastMessage = () => {
  return (
    <>
      <span className="font-bold">전화번호</span> 가 복사되었습니다.
    </>
  )
}

const page = () => {
  const { toast } = useToast()

  useEffect(() => {
    toast(<ToastMessage />)
  }, [])

  return <div>page</div>
}

export default page
