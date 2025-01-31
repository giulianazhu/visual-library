import { yupResolver } from '@hookform/resolvers/yup'
import { useEdit } from 'features/image/hooks/useEdit'
import ImageForm from 'features/image/ui/image-form'
import { useForm } from 'react-hook-form'
import { imageSchema } from 'schemas/image'
import useToast from 'shared/hooks/useToast'
import { ApiCreateImage, ApiImage } from 'types/api/image'

interface EditDetailProps {
  setIsEdit: (val: boolean) => void
  image: ApiImage
}

function EditDetail({ setIsEdit, image }: EditDetailProps) {
  const form = useForm({ resolver: yupResolver(imageSchema), defaultValues: { ...image } })
  const { mutateAsync: mutatePut, isPending: isSaving } = useEdit(image.id)
  const { showSuccess, showError, contextHolder } = useToast()

  const handleSave = async (data: ApiCreateImage) => {
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

  return (
    <>
      {contextHolder}
      <ImageForm image={image} form={form} isSubmitting={isSaving} onSubmit={handleSave} />
    </>
  )
}

export default EditDetail
