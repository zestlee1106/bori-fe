'use client'

import useDialogStore from '@/app/stores/dialog'
import ReactDOM from 'react-dom'

const DialogList = () => {
  const { dialogList } = useDialogStore()
  const dialogRoot = document.getElementById('toast-root')

  if (!dialogRoot) {
    return null
  }

  return ReactDOM.createPortal(<div>element</div>, dialogRoot)
}

export default DialogList
