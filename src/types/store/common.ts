export interface SearchParameters {
  query: string
  tags: number[]
  page: number
  pageSize: number
  sortBy: Sorters
}

export interface Sorters {
  activity: 'asc' | 'desc'
  [key: string]: 'asc' | 'desc'
}

export interface SearchParametersSetters {
  setQuery: (query: SearchParameters['query']) => void
  setTags: (tags: SearchParameters['tags']) => void
  setPage: (page: SearchParameters['page']) => void
  setPageSize: (pageSize: SearchParameters['pageSize']) => void
  setSortBy: (sortBy: SearchParameters['sortBy']) => void
  setResetAll: () => void
}

export interface InfiniteSearch extends SearchParametersSetters {
  pars: SearchParameters
}
