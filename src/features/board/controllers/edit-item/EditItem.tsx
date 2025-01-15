import { yupResolver } from '@hookform/resolvers/yup'
import BoardListItem from 'features/board/ui/board-list-item'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { boardSchema } from 'schemas/board'

interface EditItemProps {
  board: any
}

function EditItem({ board }: EditItemProps) {
  const [isEdit, setIsEdit] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const form = useForm({ resolver: yupResolver(boardSchema), defaultValues: board })

  const handleSave = () => {}

  const handleStar = () => {
    board = { ...board, isFavourite: !board.isFavourite }
  }

  const handleDelete = () => {}

  return (
    <BoardListItem
      board={board}
      form={form}
      isEdit={isEdit}
      setIsEdit={setIsEdit}
      onEdit={handleSave}
      onStar={handleStar}
      onDelete={handleDelete}
      isSaving={isSaving}
    />
  )
}

export default EditItem
