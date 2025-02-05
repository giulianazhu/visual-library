import { useMutation, useQueryClient } from '@tanstack/react-query'
import { fakeFetcher } from 'shared/utils/utils'

//id here to include it in the query key
export function useStar(id: number) {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async () => {
      return fakeFetcher(id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['boards'] })
      queryClient.invalidateQueries({ queryKey: ['board', id] })
    },
    onError: (error) => {
      console.error('error', error)
    },
  })

  return mutation
}
