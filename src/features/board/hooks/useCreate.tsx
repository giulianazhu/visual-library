import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useCreate() {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (data) => {
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
      queryClient.invalidateQueries({ queryKey: ['boards'] })
    },
    onError: (error) => {
      console.error('error', error)
    },
  })

  return mutation
}
