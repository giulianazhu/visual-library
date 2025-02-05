import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { mockBoards } from 'shared/utils/mockData'
import { fakeFetcher } from 'shared/utils/utils'
import { ApiBoard } from 'types/api/board'

function useLoad(id: number) {
  const query: UseQueryResult<ApiBoard, Error> = useQuery({
    queryFn: async () => {
      const res = await fakeFetcher(mockBoards.find((board) => board.id === id))
      return res.data
    },
    queryKey: ['board', id],
  })

  return query
}

export default useLoad
