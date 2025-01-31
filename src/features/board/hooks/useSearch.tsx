import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { mockBoards } from 'shared/utils/mockData'
import { fakeFetcher } from 'shared/utils/utils'
import { ApiBoard } from 'types/api/board'
import { SearchBoardStore } from '../store/search'

function useSearch(search: SearchBoardStore['query'], filters: SearchBoardStore['filters']) {
  const query: UseQueryResult<ApiBoard[], Error> = useQuery({
    queryFn: async () => {
      // assume using query and filters inside fetcher
      const res = await fakeFetcher(mockBoards)
      return res.data
    },
    queryKey: ['boards', { search, filters }],
  })

  return query
}

export default useSearch
