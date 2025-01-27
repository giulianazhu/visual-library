import { useQuery } from '@tanstack/react-query'

function useLoad() {
  const query = useQuery({
    queryFn: async () => {
      return { data: 'sth' }
      // const response = await fetch('/api/boards')
      // if (!response.ok) {
      //   throw new Error('Network response was not ok')
      // }
      // return response.json()
    },
    queryKey: ['boards'],
  })

  return query
}

export default useLoad
