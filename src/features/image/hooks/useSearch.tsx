import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { mockImages } from 'shared/utils/mockData'
import { fakeFetcher } from 'shared/utils/utils'
import { ApiImage } from 'types/api/image'

function useSearch() {
  const query: UseQueryResult<ApiImage[], Error> = useQuery({
    queryFn: async () => {
      const res = await fakeFetcher(mockImages)
      return res.data
    },
    queryKey: ['images'],
  })

  return query
}

export default useSearch
