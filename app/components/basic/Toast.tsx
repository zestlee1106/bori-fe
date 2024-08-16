import React, { useEffect } from 'react'
import useToastStore from '@/app/stores/toast'
import { Toast as ToastStore } from '@/app/stores/toast'
import { DEFAULT_DURATION } from '@/app/components/container/ToastList'

interface IToastProps {
  toast: ToastStore
}

const TOAST_DEFAULT_Z_INDEX = 5000

const Toast = ({ toast }: IToastProps) => {
  const { id, text, duration } = toast

  const { removeToast } = useToastStore()

  const toastIndex = Number(id.replace('toast-', ''))
  const calculatedZIndex = TOAST_DEFAULT_Z_INDEX + toastIndex

  // 토스트메시지가 나오고 바로 삭제되면 트랜지션이 보이지 않아서 0.5 초 추가
  const toastDuration = (duration || DEFAULT_DURATION) + 500

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id)
    }, toastDuration)

    return () => {
      clearTimeout(timer)
    }
  }, [])

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
