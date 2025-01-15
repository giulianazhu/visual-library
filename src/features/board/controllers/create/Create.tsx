import { yupResolver } from '@hookform/resolvers/yup'
import BoardForm from 'features/board/ui/board-form'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { boardSchema } from 'schemas/board'

function Create() {
  const [isCreating, setIsCreating] = useState(false)

  const handleCreate = () => {
    setIsCreating(true)
    // call api
    console.log('create')
    setIsCreating(false)
  }

  const form = useForm({ resolver: yupResolver(boardSchema) })

  return (
    <>
      <BoardForm form={form} isLoading={isCreating} onSubmit={handleCreate} />
    </>
  )
}

export default Create
