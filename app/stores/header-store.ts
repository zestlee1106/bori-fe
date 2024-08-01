/**
 * @deprecated
 * Header 를 클라이언트에서 관리함에 따라 필요없어진 스토어
 * 추후 참고용으로 일단은 남긴다
 */

import { create } from 'zustand'

type BackgroundColor = 'transparent' | 'white' | 'black'

export interface HeaderState {
  showLogo: boolean
  backgroundColor: BackgroundColor
  showBackButton: boolean
}

export interface HeaderActions {
  setLogoVisibility: (visible: boolean) => void
  setBackgroundColor: (color: BackgroundColor) => void
  setBackButtonVisibility: (visible: boolean) => void
}

const useHeaderStore = create<HeaderState & HeaderActions>((set) => ({
  // state
  showLogo: true,
  backgroundColor: 'transparent',
  showBackButton: false,

  // action
  setLogoVisibility: (visible: boolean) => set({ showLogo: visible }),
  setBackgroundColor: (color: BackgroundColor) => set({ backgroundColor: color }),
  setBackButtonVisibility: (visible: boolean) => set({ showBackButton: visible }),
}))

export default useHeaderStore
