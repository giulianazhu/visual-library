import { yupResolver } from '@hookform/resolvers/yup'
import useCreate from 'features/board/hooks/useCreate'
import BoardForm from 'features/board/ui/board-form'
import { useForm } from 'react-hook-form'
import { boardSchema } from 'schemas/board'
import useToast from 'shared/hooks/useToast'
import { ApiCreateBoard } from 'types/api/board'

interface CreateProps {
  setIsCreate: (value: boolean) => void
}

function Create({ setIsCreate }: CreateProps) {
  const form = useForm({ resolver: yupResolver(boardSchema) })
  const { isPending: isCreating, mutateAsync: mutateCreate } = useCreate<ApiCreateBoard>()
  const { showSuccess, showError, contextHolder } = useToast()

  const handleCreate = async (data: ApiCreateBoard) => {
    try {
      const res = await mutateCreate(data)
      if (res.error) {
        throw new Error('error')
      }
      setIsCreate(false)
      form.reset()
      showSuccess()
    } catch (error) {
      if (error instanceof Error) showError()
    }
  }

  return (
    <>
      {contextHolder}
      <BoardForm form={form} isSubmitting={isCreating} onSubmit={handleCreate} />
    </>
  )
}

export default Create
