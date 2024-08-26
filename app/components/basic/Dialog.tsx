import React from 'react'
import { Dialog as DialogStore } from '@/app/stores/dialog'

interface IDialogProps {
  dialog: DialogStore
}

const DIALOG_DEFAULT_Z_INDEX = 3000

const Toast = ({ dialog }: IDialogProps) => {
  const { id, content } = dialog

  const toastIndex = Number(id.replace('dialog-', ''))
  const calculatedZIndex = DIALOG_DEFAULT_Z_INDEX + toastIndex

  return <div>{content}</div>
}

export default Toast
