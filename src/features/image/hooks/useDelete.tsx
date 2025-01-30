import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query'
import { fakeFetcher } from 'shared/utils/utils'

export function useDelete<ParamType>() {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (ids: ParamType) => {
      return fakeFetcher(ids)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['images'] })
    },
    onError: (error) => {
      console.error(error)
    },
  })

  return mutation
}
