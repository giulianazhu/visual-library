import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useStar(id: number) {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (data) => {
      // include id in the api url to edit the item
      return {
        ok: true,
        status: 200,
        json: async () => ({
          message: 'Fake fetch successful',
          data: { id: 1, name: 'Test Item' },
        }),
        error: false,
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['boards', 'board', id] })
    },
    onError: (error) => {
      console.error('error', error)
    },
  })

  return mutation
}
