import { useMutation, useQueryClient } from '@tanstack/react-query'
import { fakeFetcher } from 'shared/utils/utils'

export function useEdit<DataType>(id: number) {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (data: DataType) => {
      return fakeFetcher(data)
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
