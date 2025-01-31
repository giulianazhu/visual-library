import { SortBy } from 'types/enums'

export interface SearchParameters {
  query: string
  filters: SearchFilters
}

export interface SearchFilters {
  tags: number[]
  limit: number
  sortBy: SortBy
}

export interface ApiQueryParams {
  tags?: number[] | []
  boards?: number[] | []
  sortBy: 'random' | 'active' | 'inactive'
  limit: number
}
