'use client'

import React, { CSSProperties, useEffect, useRef, useState } from 'react'
import useToastStore from '@/app/stores/toast'
import ReactDOM from 'react-dom'
import Toast from '@/app/components/basic/Toast'
import { Transition, TransitionGroup } from 'react-transition-group'

export const DEFAULT_DURATION = 1000 // 기본 유지 시간

const ENTER_DURATION = 1000 // 나타나는 애니메이션 시간
const EXIT_DURATION = 500 // 사라지는 애니메이션 시간

const transitionStyles: Record<string, CSSProperties> = {
  entering: {
    position: 'absolute',
    opacity: 0,
    transform: 'translateY(20)',
  },
  entered: {
    opacity: 1,
    transition: `opacity ${ENTER_DURATION / 2}ms ease-in-out, transform ${ENTER_DURATION}ms ease-in-out`,
    transform: 'translateY(-24px)',
  },
  exiting: {
    opacity: 0,
    transition: `opacity ${EXIT_DURATION / 2}ms ease-in-out, transform ${EXIT_DURATION}ms ease-in-out`,
    transform: 'translateY(0)',
  },
}

const ToastList: React.FC = () => {
  const { toastList, removeToast } = useToastStore()
  const [mounted, setMounted] = useState(false)
  const timersRef = useRef<{ [key: string]: NodeJS.Timeout }>({})

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
            exit: EXIT_DURATION,
          }}
          onEntered={() => {
            // 스토어에서 삭제되기까지의 시간 (유지시간 + 나타나기 시간 + 사라지기 시간)
            const holdDuration = (toast.duration || DEFAULT_DURATION) + ENTER_DURATION + EXIT_DURATION
            timersRef.current[toast.id] = setTimeout(() => {
              removeToast(toast.id)
              delete timersRef.current[toast.id]
            }, holdDuration)
          }}
          onExit={() => {
            // 토스트가 사라지기 시작할 때 타이머를 정리
            if (timersRef.current[toast.id]) {
              clearTimeout(timersRef.current[toast.id])
              delete timersRef.current[toast.id]
            }
          }}
        >
          {(status) => (
            <div style={transitionStyles[status]}>
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
