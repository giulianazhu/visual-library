import { useMutation, useQueryClient } from '@tanstack/react-query'
import { fakeFetcher } from 'shared/utils/utils'

export function useStar(id: number) {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (data) => {
      // supposedly a patch api call
      return fakeFetcher(data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['images'] })
      queryClient.invalidateQueries({ queryKey: ['image', id] })
    },
    onError: (error) => {
      console.error('error', error)
    },
  })

  return mutation
}
