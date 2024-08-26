'use client'

import useDialogStore from '@/app/stores/dialog'
import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Dialog from '../basic/Dialog'

const DialogList = () => {
  const { dialogList } = useDialogStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const dialogRoot = document.getElementById('dialog-root')

  if (!dialogRoot) {
    return null
  }

  return ReactDOM.createPortal(
    <>
      {dialogList.length > 0 && <div className="fixed w-full h-full bg-BLACK_1000 bg-opacity-50"></div>}
      {dialogList.map((dialog) => (
        <Dialog key={dialog.id} dialog={dialog} />
      ))}
    </>,
    dialogRoot,
  )
}

export default DialogList
