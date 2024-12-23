import { create } from 'zustand'
import { initialPars } from '@utils/constants'
import { InfiniteSearch, SearchParameters } from '@app-types/store/common'

export const useSearchAgencies = create<InfiniteSearch>((set) => ({
  pars: initialPars,
  setQuery: (query: SearchParameters['query']) =>
    set((state) => ({
      pars: {
        ...state.pars,
        query,
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
  setSortBy: (orderBy: SearchParameters['sortBy']) =>
    set((state) => ({
      pars: {
        ...state.pars,
        orderBy,
      },
    })),
}))
