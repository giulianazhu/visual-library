import { useMutation, useQueryClient } from '@tanstack/react-query'
import { fakeFetcher } from 'shared/utils/utils'

function useLogin<DataType>() {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (data: DataType) => {
      return fakeFetcher({
        id: 1,
        jwt: {
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
          refreshToken: 'd4f981fa-bf76-4f38-8d27-ecadfa9cfe74',
          expiresIn: 3600,
        },
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
    onError: (error) => {
      console.error(error)
    },
  })

  return mutation
}

export default useLogin
