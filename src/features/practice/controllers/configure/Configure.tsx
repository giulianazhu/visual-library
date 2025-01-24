import { yupResolver } from '@hookform/resolvers/yup'
import routes from 'core/configs/routes'
import { useConfigurePractice } from 'features/practice/store/practice'
import PracticeForm from 'features/practice/ui/practice-form'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { practiceSchema } from 'schemas/practice'
import { PracticeStatus, RoutePath } from 'types/enums'

function Configure() {
  const navigate = useNavigate()
  const { settings, setSettings } = useConfigurePractice((state) => state)

  const form = useForm({ resolver: yupResolver(practiceSchema), defaultValues: settings })

  const handleSubmit = (form) => {
    console.log(form)
    setSettings(form)
    navigate(routes.practiceStatus.url.replace(RoutePath.Status, PracticeStatus.Start))
  }

  return <PracticeForm onSubmit={handleSubmit} form={form} />
}

export default Configure
