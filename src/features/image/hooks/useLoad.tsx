import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { mockImages } from 'shared/utils/mockData'
import { fakeFetcher } from 'shared/utils/utils'
import { ApiImage } from 'types/api/image'

function useLoad(id: number) {
  const query: UseQueryResult<ApiImage, Error> = useQuery({
    queryFn: async () => {
      const res = await fakeFetcher(mockImages.find((image) => image.id === id))
      return res.data
    },
    queryKey: ['image', id],
  })

  return query
}

export default useLoad
