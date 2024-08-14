'use client'

import React, { useEffect, useState } from 'react'
import useToastStore from '@/app/stores/toast'
import ReactDOM from 'react-dom'
import Toast from '@/app/components/basic/Toast'

const ToastList = () => {
  const { toastList } = useToastStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toastRoot = document.getElementById('toast-root')

  if (!toastRoot) {
    return null
  }

  return ReactDOM.createPortal(
    <div>
      {toastList.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </div>,
    toastRoot,
  )
}

export default ToastList
