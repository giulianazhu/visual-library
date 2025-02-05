import { useMutation, useQueryClient } from '@tanstack/react-query'
import { fakeFetcher } from 'shared/utils/utils'

export function useEditNote(id: number) {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (data: string) => {
      // supposedly a patch api call
      return fakeFetcher(data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['image', id] })
    },
    onError: (error) => {
      console.error('error', error)
    },
  })

  return mutation
}
