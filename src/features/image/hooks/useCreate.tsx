import { useMutation, useQueryClient } from '@tanstack/react-query'
import { fakeFetcher } from 'shared/utils/utils'

function useCreate<DataType>() {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (data: DataType) => {
      return fakeFetcher(data)
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

export default useCreate
