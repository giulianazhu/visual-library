import { useTranslation } from 'react-i18next'
import style from './styles.module.scss'
import { UseFormReturn } from 'react-hook-form'
import { ApiLogin } from 'types/api/app'
import FormInput from 'shared/ui/form-input'
import FormLabel from 'shared/ui/form-label'
import FormRow from 'shared/ui/form-row'
import { Button, Flex } from 'antd'

interface LoginFormProps {
  form: UseFormReturn<ApiLogin>
  onSubmit: (form: ApiLogin) => void
  isSubmitting: boolean
}

function LoginForm({ form, onSubmit, isSubmitting }: LoginFormProps) {
  const { t } = useTranslation()

  const { handleSubmit, control } = form

  return (
    <div className={style['login-form']}>
      <Flex vertical align="center" justify="center" className="h-100">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormRow>
            <FormLabel htmlFor="username" required={true}>
              {t('auth.username')}
            </FormLabel>
            <FormInput name="username" control={control} />
          </FormRow>
          <FormRow>
            <FormLabel htmlFor="password" required={true}>
              {t('auth.password')}
            </FormLabel>
            <FormInput name="password" control={control} type="password" />
          </FormRow>
          <FormRow>
            <Button type="primary" loading={isSubmitting} htmlType="submit">
              {t('auth.login')}
            </Button>
          </FormRow>
        </form>
      </Flex>
    </div>
  )
}

export default LoginForm
