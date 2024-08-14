import useToastStore from '@/app/stores/toast'

const useToast = () => {
  const { addToast } = useToastStore()

  const toast = (text: string) => {
    addToast(text)
  }

  return { toast }
}

export default useToast
