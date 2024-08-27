import { uniqueId } from 'lodash'
import { create } from 'zustand'

type Direction = 'top' | 'center' | 'bottom'

export interface Dialog {
  id: string
  content: React.ReactNode
  animationDirection: Direction
}

interface DialogState {
  dialogList: Dialog[]
}

interface DialogAction {
  addDialog: (content: React.ReactNode) => void
  removeDialog: (id: string) => void
  popDialog: () => void
  clearDialog: () => void
}

const useDialogStore = create<DialogState & DialogAction>((set, get) => ({
  // state
  dialogList: [],

  // action
  addDialog: (content: React.ReactNode, animationDirection: Direction = 'center') => {
    const id = uniqueId('dialog-')
    const newDialogList: Dialog[] = [
      ...get().dialogList,
      {
        id: id,
        content,
        animationDirection,
      },
    ]
    set({ dialogList: newDialogList })
  },
  removeDialog: (id: string) => {
    const dialogList = get().dialogList
    const newDialogList = dialogList.filter((dialog) => dialog.id !== id)

    set({ dialogList: newDialogList })
  },
  popDialog: () => {
    const newDialogList = get().dialogList
    newDialogList.pop()
    set({ dialogList: newDialogList })
  },
  clearDialog: () => {
    set({ dialogList: [] })
  },
}))

export default useDialogStore
