import { useTranslation } from 'react-i18next'
import FormRow from 'shared/ui/form-row'
import FormLabel from 'shared/ui/form-label'
import { Alert, Button, Flex } from 'antd'
import { UseFormReturn } from 'react-hook-form'
import FormSelect from 'shared/ui/form-select'
import FormInput from 'shared/ui/form-input'
import FormCard from 'shared/ui/form-card'
import { DeleteIcon } from 'shared/icons'
import IconWrapper from 'shared/ui/icon-wrapper'
import { ApiCreateBoard } from 'types/api/board'
import useUserStore from 'features/app/store/user'

interface BoardFormProps {
  board?: any
  form: UseFormReturn<ApiCreateBoard>
  onSubmit: (form: ApiCreateBoard) => void
  onDelete?: () => void
  isSubmitting: boolean
  isDeleting?: boolean
}

function BoardForm({ board, isSubmitting, isDeleting, onSubmit, form, onDelete }: BoardFormProps) {
  const { t } = useTranslation()
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form
  const { tags: userTags } = useUserStore((state) => state.user)
  const tagOptions = userTags?.map((tag) => ({ label: tag.name, value: tag.id })) ?? []
  const hasErrors = Object.keys(errors).length > 0

  return (
    <FormCard>
      <form className="h-100" onSubmit={handleSubmit(onSubmit)}>
        <Flex vertical className="h-100">
          <FormRow>
            <FormLabel htmlFor="title" required={true}>
              {t('general.title')}
            </FormLabel>
            <FormInput control={control} name="title" />
          </FormRow>
          <FormRow>
            <FormLabel htmlFor="description">{t('general.description')}</FormLabel>
            <FormInput control={control} name="description" />
          </FormRow>
          <FormRow>
            <FormLabel htmlFor="tags">{t('general.tags')}</FormLabel>
            <FormSelect control={control} name="tags" mode="tags" options={tagOptions} />
          </FormRow>
          <FormRow>
            {board ? (
              <Flex justify="space-between">
                <Button loading={isDeleting} onClick={onDelete}>
                  <IconWrapper>
                    {t('action.delete')}
                    <DeleteIcon />
                  </IconWrapper>
                </Button>
                <Button type="primary" htmlType="submit" loading={isSubmitting}>
                  {t('action.save')}
                </Button>
              </Flex>
            ) : (
              <Flex justify="flex-end">
                <Button type="primary" htmlType="submit" loading={isSubmitting}>
                  {t('action.add')}
                </Button>
              </Flex>
            )}
          </FormRow>
          {hasErrors && (
            <FormRow>
              <Alert message={t('warning.formMsg')} type="warning" />
            </FormRow>
          )}
        </Flex>
      </form>
    </FormCard>
  )
}

export default BoardForm
