import { create } from 'zustand'
import { initialPars } from 'shared/utils/constants'
import { SearchFilters } from 'types/api/common'
import { SearchStore } from 'types/store/common'

export interface SearchBoardStore extends SearchStore {
  query: string
  filters: SearchFilters
  setQuery: (query: string) => void
  setFilters: (filters: SearchFilters) => void
  setResetFilters: () => void
}

export const useSearchBoard = create<SearchBoardStore>((set) => ({
  query: initialPars.query,
  filters: initialPars.filters,
  setQuery: (query: string) => {
    set({ query })
  },
  setFilters: (filters: SearchFilters) => {
    set({ filters })
  },
  setResetFilters: () => {
    set({ filters: initialPars.filters })
  },
}))
