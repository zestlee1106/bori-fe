import useDialogStore from '@/app/stores/dialog'

const useDialog = () => {
  const { addDialog, removeDialog, popDialog } = useDialogStore()

  const throwDialog = (content: React.ReactNode) => {
    addDialog(content)
  }

  const closeDialog = (id?: string) => {
    if (id) {
      removeDialog(id)
      return
    }

    popDialog()
  }

  return { throwDialog, closeDialog }
}

export default useDialog
