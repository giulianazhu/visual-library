import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { mockBoards } from 'shared/utils/mockData'
import { fakeFetcher } from 'shared/utils/utils'
import { ApiImage } from 'types/api/image'

function useLoad(id: number) {
  const query: UseQueryResult<ApiImage, Error> = useQuery({
    queryFn: async () => {
      const res = await fakeFetcher(mockBoards)
      return res.data
    },
    queryKey: ['images', id],
  })

  return query
}

export default useLoad
