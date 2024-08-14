import { create } from 'zustand'
import { uniqueId } from 'lodash'

export interface Toast {
  id: string
  text: string | React.JSX.Element
  duration?: number
}

interface ToastState {
  toastList: Toast[]
}

interface ToastActions {
  addToast: (message: string | React.JSX.Element) => void
  removeToast: (id: string) => void
}

const useToastStore = create<ToastState & ToastActions>((set, get) => ({
  // state
  toastList: [],

  // action
  addToast: (message: string | React.JSX.Element) => {
    const id = uniqueId('toast-')
    const newToastList = [
      ...get().toastList,
      {
        id: id,
        text: message,
      },
    ]
    set({ toastList: newToastList })
  },
  removeToast: (id: string) => {
    const toastList = get().toastList
    const newToastList = toastList.filter((toast) => toast.id !== id)

    set({ toastList: newToastList })
  },
}))

export default useToastStore
