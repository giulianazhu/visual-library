export interface SearchParameters {
  query?: string
  tags: number[] | []
  page?: number
  pageSize?: number
  sortBy?: Sorters
}

export interface Sorters {
  recency: 'new' | 'old'
  activity: 'active' | 'inactive'
}

export interface SearchParametersSetters {
  setQuery: (query: SearchParameters['query']) => void
  setPage: (page: SearchParameters['page']) => void
  setPageSize: (pageSize: SearchParameters['pageSize']) => void
  setSortBy: (orderBy: SearchParameters['sortBy']) => void
}

export interface InfiniteSearch extends SearchParametersSetters {
  pars: SearchParameters
}
