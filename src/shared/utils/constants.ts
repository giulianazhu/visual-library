import { SortBy } from 'types/enums'
import { SearchFilters, SearchParameters } from 'types/api/common'

export const initialFilters: SearchFilters = {
  limit: 20,
  sortBy: SortBy.ActiveFirst,
  tags: [],
}

export const initialPars: SearchParameters = {
  query: '',
  filters: initialFilters,
}
