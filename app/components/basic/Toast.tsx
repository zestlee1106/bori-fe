import React from 'react'
import { Toast as ToastStore } from '@/app/stores/toast'

interface IToastProps {
  toast: ToastStore
}

const TOAST_DEFAULT_Z_INDEX = 5000

const Toast = ({ toast }: IToastProps) => {
  const { id, text } = toast

  const toastIndex = Number(id.replace('toast-', ''))
  const calculatedZIndex = TOAST_DEFAULT_Z_INDEX + toastIndex

  return (
    <div
      className="bg-BLACK_900 rounded-[10px] h-[42px] text-WHITE_1000 py-[11px] pl-[22px] text-[14px] leading-[20px] tracking-[-0.025em] absolute left-0 right-0 mx-auto w-[calc(100%-48px)] bottom-0"
      style={{
        zIndex: calculatedZIndex,
      }}
    >
      {text}
    </div>
  )
}

export default Toast
