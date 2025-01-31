import { useMutation, useQueryClient } from '@tanstack/react-query'

type LoginResponse<DataType> = {
  data: DataType & { id: number } // Ensure `data` exists and includes `id`
  error: boolean
}

function useLogin<DataType>() {
  const queryClient = useQueryClient()

  const mutation = useMutation<LoginResponse<DataType>, Error, DataType>({
    mutationFn: async (data: DataType) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data: { ...data, id: 1 },
            error: false, //for typing purpose to showcase error handling in delete/edit/create operations
          })
        }, 2000)
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
