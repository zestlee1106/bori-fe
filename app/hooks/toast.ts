import useToastStore from '@/app/stores/toast'

const useToast = () => {
  const { addToast } = useToastStore()

  const toast = (text: string | React.JSX.Element) => {
    addToast(text)
  }

  return { toast }
}

export default useToast
