import { useQuery, useQueryClient, UseQueryResult } from '@tanstack/react-query'
import { useEffect } from 'react'
import { mockImages } from 'shared/utils/mockData'
import { fakeFetcher } from 'shared/utils/utils'
import { ApiImage } from 'types/api/image'

function useLoadPrefetch(id: number) {
  const queryClient = useQueryClient()
  // load scroller items based on images surrounding curr img
  const query: UseQueryResult<ApiImage[], Error> = useQuery({
    queryFn: async () => {
      const res = await fakeFetcher(mockImages)
      return res.data
    },
    queryKey: ['scrollerImages', id],
  })

  // prefetch image detail data for scroller items
  useEffect(() => {
    for (const image of mockImages) {
      queryClient.prefetchQuery({
        queryKey: ['image', image.id],
        queryFn: async () => {
          const res = await fakeFetcher(mockImages.find((img) => img.id === image.id))
          return res.data
        },
      })
    }
  }, [queryClient])

  return query
}

export default useLoadPrefetch
