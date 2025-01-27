import { yupResolver } from '@hookform/resolvers/yup'
import useCreate from 'features/board/hooks/useCreate'
import ImageForm from 'features/image/ui/image-form'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { imageSchema } from 'schemas/image'
import useToast from 'shared/hooks/useToast'

function Create() {
  const [isCreate, setIsCreate] = useState(false)
  const form = useForm({ resolver: yupResolver(imageSchema) })
  const { isPending: isCreating, mutateAsync } = useCreate()
  const { showSuccess, showError, contextHolder } = useToast()

  const handleCreate = async (data: any) => {
    try {
      const res = await mutateAsync(data)
      if (res.error) {
        throw new Error('error')
      }
      setIsCreate(false)
      form.reset()
      showSuccess()
    } catch (error) {
      if (error instanceof Error) {
        showError()
      }
      console.error('Mutation failed:', error)
    }
  }

  return (
    <>
      {contextHolder}
      <ImageForm form={form} isLoading={isCreating} onSubmit={handleCreate} />
    </>
  )
}

export default Create
