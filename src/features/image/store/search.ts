import { create } from 'zustand'
import { initialPars } from 'shared/utils/constants'
import { InfiniteSearch, SearchParameters } from 'types/store/common'

export const useSearchImage = create<InfiniteSearch>((set) => ({
  pars: initialPars,
  setQuery: (query: SearchParameters['query']) =>
    set((state) => ({
      pars: {
        ...state.pars,
        query,
      },
    })),
  setTags: (tags: SearchParameters['tags']) =>
    set((state) => ({
      pars: {
        ...state.pars,
        tags,
      },
    })),
  setPage: (page: SearchParameters['page']) =>
    set((state) => ({
      pars: {
        ...state.pars,
        page,
      },
    })),
  setPageSize: (pageSize: SearchParameters['pageSize']) =>
    set((state) => ({
      pars: {
        ...state.pars,
        pageSize,
      },
    })),
  setSortBy: (sortBy: SearchParameters['sortBy']) =>
    set((state) => ({
      pars: {
        ...state.pars,
        sortBy,
      },
    })),
  setResetAll: () => {
    set((state) => ({
      pars: {
        ...initialPars, // Reset all to initial values
        query: state.pars.query, // Preserve the current query
      },
    }))
  },
}))
