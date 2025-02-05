import { useMutation, useQueryClient } from '@tanstack/react-query'
import { fakeFetcher } from 'shared/utils/utils'
import { ApiCreateImage } from 'types/api/image'

export function useEdit(id: number) {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (image: ApiCreateImage) => {
      // include id in the api url to edit the item
      return fakeFetcher(image)
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
