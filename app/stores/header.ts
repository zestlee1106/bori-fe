import { create } from 'zustand'

export interface HeaderState {
  additionalHeaderContent: null | JSX.Element
}

export interface HeaderActions {
  setAdditionalHeaderContent: (visible: React.JSX.Element | null) => void
}

const useHeaderStore = create<HeaderState & HeaderActions>((set) => ({
  // state
  additionalHeaderContent: null,

  // action
  setAdditionalHeaderContent: (header: React.JSX.Element | null) => set({ additionalHeaderContent: header }),
}))

export default useHeaderStore
