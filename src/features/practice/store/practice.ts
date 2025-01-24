import { create } from 'zustand'

const getUserSettings = () => {
  return {
    boards: [],
    tags: [],
    number: 5,
    sortBy: 'random',
    timed: true,
    duration: 30,
    pause: 0,
  }
}

export const useConfigurePractice = create((set) => ({
  settings: getUserSettings(),
  setSettings: (settings: any) => {
    set(() => ({
      settings,
    }))
  },
}))
