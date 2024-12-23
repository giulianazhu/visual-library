import { SearchParameters } from 'types/store/common'

export const initialPars: SearchParameters = {
  query: '',
  page: 1,
  pageSize: 20,
  sortBy: { activity: 'desc' },
  tags: [],
}
