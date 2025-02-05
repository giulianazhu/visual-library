import { yupResolver } from '@hookform/resolvers/yup'
import routes from 'core/configs/routes'
import { useConfigurePractice } from 'features/practice/store/practice'
import PracticeForm from 'features/practice/ui/practice-form'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { practiceSchema } from 'schemas/practice'
import useToast from 'shared/hooks/useToast'
import { mockImages } from 'shared/utils/mockData'
import { fakeFetcher } from 'shared/utils/utils'
import { ApiCreatePractice, ApiPracticeImage } from 'types/api/practice'
import { PracticeStatus, RoutePath } from 'types/enums'

interface ConfigureProps {
  setImages: (images: ApiPracticeImage[]) => void
}

function Configure({ setImages }: ConfigureProps) {
  const navigate = useNavigate()
  const { showError, contextHolder } = useToast()
  const { settings } = useConfigurePractice((state) => state)
  const [isSearching, setIsSearching] = useState(false)
  const form = useForm({ resolver: yupResolver(practiceSchema), defaultValues: settings })

  const handleSubmit = async (form: ApiCreatePractice) => {
    console.log('using form data to fetch images', form)
    try {
      setIsSearching(true)
      const res = await fakeFetcher(mockImages)
      if (res.error) {
        setIsSearching(false)
        throw new Error('error')
      }
      setImages(res.data)
      setIsSearching(false)
      navigate(routes.practiceStatus.url.replace(RoutePath.Status, PracticeStatus.Start))
    } catch (error) {
      if (error instanceof Error) {
        showError(error.message)
      }
    }
  }

  return (
    <>
      {contextHolder}
      <PracticeForm onSubmit={handleSubmit} form={form} isSubmitting={isSearching} />
    </>
  )
}

export default Configure
