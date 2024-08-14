import React from 'react'
import useToastStore from '@/app/stores/toast'
import { Toast as ToastStore } from '@/app/stores/toast'

const DEFAULT_DURATION = 100000

interface IToastProps {
  toast: ToastStore
}

const Toast = ({ toast }: IToastProps) => {
  const { id, text, duration } = toast

  const { removeToast } = useToastStore()

  setTimeout(() => {
    removeToast(id)
  }, duration || DEFAULT_DURATION)

  return (
    <div className="bg-BLACK_900 rounded-[10px] h-[42px] text-WHITE_1000 py-[11px] pl-[22px] text-[14px] leading-[20px] tracking-[-0.025em]">
      {text}
    </div>
  )
}

export default Toast
