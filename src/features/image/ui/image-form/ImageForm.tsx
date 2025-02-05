import { useTranslation } from 'react-i18next'
import FormRow from 'shared/ui/form-row'
import FormLabel from 'shared/ui/form-label'
import { Alert, Button, Flex } from 'antd'
import { UseFormReturn } from 'react-hook-form'
import FormSelect from 'shared/ui/form-select'
import FormInput from 'shared/ui/form-input'
import FormTextArea from 'shared/ui/form-text-area'
import FormCard from 'shared/ui/form-card'
import { ApiCreateImage, ApiImage } from 'types/api/image'
import useUserStore from 'features/app/store/user'

interface ImageFormProps {
  image?: ApiImage
  isSubmitting: boolean
  onSubmit: (data: ApiCreateImage) => Promise<unknown>
  form: UseFormReturn<ApiCreateImage>
}

function ImageForm({ image, isSubmitting, onSubmit, form }: ImageFormProps) {
  const { t } = useTranslation()
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form
  const { tags: userTags, boards: userBoards } = useUserStore((state) => state.user)
  const boardOptions = userBoards?.map((board) => ({ label: board.name, value: board.id })) ?? []
  const tagsOptions = userTags?.map((tag) => ({ label: tag.name, value: tag.id })) ?? []
  const hasErrors = Object.keys(errors).length > 0

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
            <FormRow>
              <FormLabel htmlFor="boardId" required={true}>
                {t('board.boards')}
              </FormLabel>
              <FormSelect control={control} name="boardId" mode="multiple" options={boardOptions} />
            </FormRow>
            <FormLabel htmlFor="tags">{t('general.tags')}</FormLabel>
            <FormSelect control={control} name="tags" mode="tags" options={tagsOptions} />
          </FormRow>
          <FormRow>
            <FormLabel htmlFor="notes">{t('image.notes')}</FormLabel>
            <FormTextArea control={control} name="note" />
          </FormRow>
          <FormRow>
            <Flex justify="end">
              {image ? (
                <Button type="primary" htmlType="submit" loading={isSubmitting}>
                  {t('action.save')}
                </Button>
              ) : (
                <Button type="primary" htmlType="submit" loading={isSubmitting}>
                  {t('action.add')}
                </Button>
              )}
            </Flex>
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

export default ImageForm
