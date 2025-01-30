import { yupResolver } from '@hookform/resolvers/yup'
import useCreate from 'features/image/hooks/useCreate'

import ImageForm from 'features/image/ui/image-form'
import { useForm } from 'react-hook-form'
import { imageSchema } from 'schemas/image'
import useToast from 'shared/hooks/useToast'
import { ApiCreateImage } from 'types/api/image'

interface CreateProps {
  setIsCreate: (value: boolean) => void
}

function Create({ setIsCreate }: CreateProps) {
  const form = useForm({ resolver: yupResolver(imageSchema) })
  const { isPending: isCreating, mutateAsync: mutateCreate } = useCreate<ApiCreateImage>()
  const { showSuccess, showError, contextHolder } = useToast()

  const handleCreate = async (data: ApiCreateImage) => {
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
      <ImageForm form={form} isSubmitting={isCreating} onSubmit={handleCreate} />
    </>
  )
}

export default Create
