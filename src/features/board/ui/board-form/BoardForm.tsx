import { useTranslation } from 'react-i18next'
import FormRow from 'shared/ui/form-row'
import FormLabel from 'shared/ui/form-label'
import { Button, Flex } from 'antd'
import { UseFormReturn } from 'react-hook-form'
import FormSelect from 'shared/ui/form-select'
import FormInput from 'shared/ui/form-input'
import FormCard from 'shared/ui/form-card'
import { DeleteIcon } from 'shared/icons'
import IconWrapper from 'shared/ui/icon-wrapper'

interface BoardFormProps {
  board?: any
  form: UseFormReturn<any>
  isLoading: boolean
  onSubmit: () => void
  onDelete?: () => void
}

function BoardForm({ board, isLoading, onSubmit, form, onDelete }: BoardFormProps) {
  const { t } = useTranslation()
  const { handleSubmit, control } = form

  return (
    <FormCard>
      <form className="h-100" onSubmit={handleSubmit(onSubmit)}>
        <Flex vertical className="h-100">
          <FormRow>
            <FormLabel htmlFor="title">{t('general.title')}</FormLabel>
            <FormInput control={control} name="title" />
          </FormRow>
          <FormRow>
            <FormLabel htmlFor="description">{t('general.description')}</FormLabel>
            <FormInput control={control} name="description" />
          </FormRow>
          <FormRow>
            <FormLabel htmlFor="tags">{t('general.tags')}</FormLabel>
            <FormSelect control={control} name="tags" mode="tags" options={[]} />
          </FormRow>
          {board ? (
            <Flex justify="space-between">
              <Button>
                <IconWrapper>
                  {t('action.delete')}
                  <DeleteIcon />
                </IconWrapper>
              </Button>
              <Button type="primary" htmlType="submit">
                {t('action.save')}
              </Button>
            </Flex>
          ) : (
            <Flex justify="flex-end">
              <Button type="primary" htmlType="submit">
                {t('action.add')}
              </Button>
            </Flex>
          )}
        </Flex>
      </form>
    </FormCard>
  )
}

export default BoardForm
