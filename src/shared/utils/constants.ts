import { SearchParameters } from '@app-types/store/common'

export const initialPars: SearchParameters = {
  query: '',
  page: 1,
  pageSize: 20,
  sortBy: { recency: 'new', activity: 'active' },
  tags: [],
}
