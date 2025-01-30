import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { mockBoards } from 'shared/utils/mockData'
import { fakeFetcher } from 'shared/utils/utils'
import { ApiBoard } from 'types/api/board'

function useSearch() {
  const query: UseQueryResult<ApiBoard[], Error> = useQuery({
    queryFn: async () => {
      const res = await fakeFetcher(mockBoards)
      return res.data
    },
    queryKey: ['boards'],
  })

  return query
}

export default useSearch
