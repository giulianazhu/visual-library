import { yupResolver } from '@hookform/resolvers/yup'
import ImageForm from 'features/image/ui/image-form'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { imageSchema } from 'schemas/image'
import * as yup from 'yup'

interface EditDetailProps {
  setIsEdit: (val: boolean) => void
  image: any
}

function EditDetail({ setIsEdit, image }: EditDetailProps) {
  const [isSaving, setIsSaving] = useState(false)
  // reac thook form logic

  const form = useForm({ resolver: yupResolver(imageSchema), defaultValues: { ...image } })
  const navigate = useNavigate()

  const handleSave = () => {
    setIsSaving(true)
    console.log('saving... calling api')
    setIsSaving(false)
    setIsEdit(false)
    console.log('redirect to image detail')
    // navigate()
  }
  return <ImageForm image={image} form={form} isLoading={isSaving} onSubmit={handleSave} />
}

export default EditDetail
