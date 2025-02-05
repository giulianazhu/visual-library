import { yupResolver } from '@hookform/resolvers/yup'
import { useDelete } from 'features/board/hooks/useDelete'
import { useEdit } from 'features/board/hooks/useEdit'
import { useStar } from 'features/board/hooks/useStar'
import BoardListItem from 'features/board/ui/board-list-item'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { boardSchema } from 'schemas/board'
import useToast from 'shared/hooks/useToast'
import { ApiCreateBoard } from 'types/api/board'

interface EditItemProps {
  board: any
}

function EditItem({ board }: EditItemProps) {
  const [isEdit, setIsEdit] = useState(false)
  const form = useForm({ resolver: yupResolver(boardSchema), defaultValues: board })
  const { mutateAsync: mutateDelete, isPending: isDeleting } = useDelete()
  const { mutateAsync: mutatePut, isPending: isSaving } = useEdit<ApiCreateBoard>(board.id)
  const { mutateAsync: mutatePatch } = useStar(board.id)
  const { showSuccess, showError, contextHolder } = useToast()

  const handleSave = async (data: any) => {
    try {
      const res = await mutatePut(data)
      if (res.error) {
        throw new Error('error')
      }
      showSuccess()
      setIsEdit(false)
    } catch (error) {
      if (error instanceof Error) showError()
    }
  }

  const handleStar = async () => {
    try {
      const res = await mutatePatch()
      if (res.error) {
        throw new Error('error')
      }
    } catch (error) {
      if (error instanceof Error) showError()
    }
  }

  const handleDelete = async () => {
    try {
      const res = await mutateDelete(board.id)
      if (res.error) {
        throw new Error('error')
      }
      showSuccess()
      setIsEdit(false)
    } catch (error) {
      if (error instanceof Error) {
        showError()
      }
      console.error(error)
    }
  }

  return (
    <>
      {contextHolder}
      <BoardListItem
        board={board}
        form={form}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        onEdit={handleSave}
        onStar={handleStar}
        onDelete={handleDelete}
        isDeleting={isDeleting}
        isSaving={isSaving}
      />
    </>
  )
}

export default EditItem
