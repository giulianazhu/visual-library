import { SortBy } from 'types/enums'
import { create } from 'zustand'

export interface PracticeSettings {
  boards: number[]
  tags: number[]
  number: number
  sortBy: string
  timed: boolean
  duration: number
}

const getPracticeSettings = (): PracticeSettings => ({
  boards: [],
  tags: [],
  number: 5,
  sortBy: SortBy.Random,
  timed: true,
  duration: 30,
})

interface PracticeStore {
  settings: PracticeSettings
  setSettings: (settings: Partial<PracticeSettings>) => void
}

export const useConfigurePractice = create<PracticeStore>((set) => ({
  settings: getPracticeSettings(),
  setSettings: (updatedSettings) =>
    set((state) => ({
      settings: { ...state.settings, ...updatedSettings },
    })),
}))
