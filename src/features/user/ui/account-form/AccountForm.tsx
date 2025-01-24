import { useTranslation } from 'react-i18next'
import style from './styles.module.scss'
import FormCard from 'shared/ui/form-card'
import FormRow from 'shared/ui/form-row'
import FormLabel from 'shared/ui/form-label'
import { UseFormReturn } from 'react-hook-form'

interface AccountFormProps {
  form: UseFormReturn<any>
  isSubmitting: boolean
  onSubmit: (form: any) => void
}

function AccountForm({ form, isSubmitting, onSubmit }: AccountFormProps) {
  const { t } = useTranslation()

  const { control, handleSubmit } = form

  return (
    <div className={style['account-form']}>
      <FormCard>
        <form>
          <FormRow>
            <FormLabel>test</FormLabel>
          </FormRow>
        </form>
      </FormCard>
    </div>
  )
}

export default AccountForm
