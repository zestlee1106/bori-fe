'use client'

import useDialogStore from '@/app/stores/dialog'
import { useEffect, useState, useRef } from 'react'
import ReactDOM from 'react-dom'
import Dialog from '../basic/Dialog'
import { usePathname } from 'next/navigation'

const DialogList = () => {
  const { dialogList, clearDialog } = useDialogStore()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const previousPathnameRef = useRef(pathname)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (previousPathnameRef.current !== pathname && dialogList.length > 0) {
      clearDialog()
    }
    previousPathnameRef.current = pathname
  }, [pathname])

  if (!mounted) {
    return null
  }

  const dialogRoot = document.getElementById('dialog-root')

  if (!dialogRoot) {
    return null
  }

  return ReactDOM.createPortal(
    <>
      {dialogList.length > 0 && (
        <div className="w-full h-full fixed z-[3000] top-0">
          <div className="fixed w-full h-full bg-BLACK_1000 bg-opacity-50"></div>
          {dialogList.map((dialog) => (
            <Dialog key={dialog.id} dialog={dialog} />
          ))}
        </div>
      )}
    </>,
    dialogRoot,
  )
}

export default DialogList
