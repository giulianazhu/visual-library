import { SearchFilters } from 'types/api/common'

export interface SearchStore {
  query: string
  setQuery: (query: string) => void
  setFilters: (filters: SearchFilters) => void
  filters: SearchFilters
  setResetFilters: () => void
}

export interface SelectOptions {
  label: string
  value: number
}
