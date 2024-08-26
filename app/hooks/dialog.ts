import useDialogStore from '@/app/stores/dialog'

const useDialog = () => {
  const { addDialog } = useDialogStore()

  const throwDialog = (content: React.ReactNode) => {
    addDialog(content)
  }

  return { throwDialog }
}

export default useDialog
