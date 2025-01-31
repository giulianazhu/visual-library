import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { mockImages } from 'shared/utils/mockData'
import { fakeFetcher } from 'shared/utils/utils'
import { ApiImage } from 'types/api/image'
import { SearchImageStore } from '../store/search'

function useSearch(search: SearchImageStore['query'], filters: SearchImageStore['filters']) {
  const query: UseQueryResult<ApiImage[], Error> = useQuery({
    queryFn: async () => {
      // assume using query and filters inside fetcher
      const res = await fakeFetcher(mockImages)
      return res.data
    },
    queryKey: ['images', { search, filters }],
  })

  return query
}

export default useSearch
