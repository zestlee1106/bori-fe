import React from 'react'
import useToastStore from '@/app/stores/toast'
import { Toast as ToastStore } from '@/app/stores/toast'

const DEFAULT_DURATION = 5000

interface IToastProps {
  toast: ToastStore
}

const Toast = ({ toast }: IToastProps) => {
  const { id, text, duration } = toast

  const { removeToast } = useToastStore()

  setTimeout(() => {
    removeToast(id)
  }, duration || DEFAULT_DURATION)

  return <div>{text}</div>
}

export default Toast
