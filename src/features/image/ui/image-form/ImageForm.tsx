import { useTranslation } from 'react-i18next'
import FormRow from 'shared/ui/form-row'
import FormLabel from 'shared/ui/form-label'
import { Button, Flex } from 'antd'
import { UseFormReturn } from 'react-hook-form'
import FormSelect from 'shared/ui/form-select'
import FormInput from 'shared/ui/form-input'
import FormTextArea from 'shared/ui/form-text-area'
import FormCard from 'shared/ui/form-card'
import { mockBoards } from 'shared/utils/mockData'

interface ImageFormProps {
  image?: any
  isSubmitting: boolean
  onSubmit: (data: any) => Promise<void>
  form: UseFormReturn<any>
}

function ImageForm({ image, isSubmitting, onSubmit, form }: ImageFormProps) {
  const { t } = useTranslation()
  const { handleSubmit, control } = form
  const boardOptions = mockBoards.map((board) => ({ label: board.title, value: board.id }))

  return (
    <FormCard>
      <form className="h-100" onSubmit={handleSubmit(onSubmit)}>
        <Flex vertical className="h-100">
          <FormRow>
            <FormLabel htmlFor="boardId" required={true}>
              {t('board.board')}
            </FormLabel>
            <FormSelect control={control} name="boardId" mode="multiple" options={boardOptions} />
          </FormRow>
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
          <FormRow>
            <FormLabel htmlFor="notes">{t('image.notes')}</FormLabel>
            <FormTextArea control={control} name="notes" />
          </FormRow>
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
        </Flex>
      </form>
    </FormCard>
  )
}

export default ImageForm
