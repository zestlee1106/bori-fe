import React, { ReactElement } from 'react'
import { Dialog as DialogStore } from '@/app/stores/dialog'

interface IDialogProps {
  dialog: DialogStore
}

const DIALOG_DEFAULT_Z_INDEX = 3000

const Dialog = ({ dialog }: IDialogProps) => {
  const { id, content } = dialog

  const toastIndex = Number(id.replace('dialog-', ''))
  const calculatedZIndex = DIALOG_DEFAULT_Z_INDEX + toastIndex

  const enhancedContent = React.isValidElement(content)
    ? React.cloneElement(content as ReactElement, { id, ...content.props })
    : content

  return (
    <div
      style={{
        zIndex: calculatedZIndex,
      }}
    >
      {enhancedContent}
    </div>
  )
}

export default Dialog
