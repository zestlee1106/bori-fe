'use client'

import React, { CSSProperties, useEffect, useState } from 'react'
import useToastStore from '@/app/stores/toast'
import ReactDOM from 'react-dom'
import Toast from '@/app/components/basic/Toast'
import { Transition, TransitionGroup } from 'react-transition-group'

export const DEFAULT_DURATION = 1000

const getTransitionStyles = (duration: number = DEFAULT_DURATION): Record<string, CSSProperties> => {
  return {
    entering: {
      position: 'absolute',
      opacity: 0,
      transform: 'translateY(100px)',
    },
    entered: {
      opacity: 1,
      transition: `opacity ${duration / 2}ms ease-in-out, transform ${duration}ms ease-in-out`,
      transform: 'translateY(0)',
    },
    exiting: {
      opacity: 0,
      transition: `opacity ${duration}ms ease-in-out, transform ${duration}ms ease-in-out`,
      transform: 'translateY(100px)',
    },
  }
}

const ToastList: React.FC = () => {
  const { toastList } = useToastStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toastRoot = document.getElementById('toast-root')

  if (!toastRoot) {
    return null
  }

  return ReactDOM.createPortal(
    <TransitionGroup>
      {toastList.map((toast) => (
        <Transition
          key={toast.id}
          timeout={{
            // 토스트메시지가 사라지기까지 시간 (현재는 보이고서 1초 대기)
            exit: 1000,
          }}
        >
          {(status) => (
            <div style={getTransitionStyles(toast.duration)[status]}>
              <Toast toast={toast} />
            </div>
          )}
        </Transition>
      ))}
    </TransitionGroup>,
    toastRoot,
  )
}

export default ToastList
