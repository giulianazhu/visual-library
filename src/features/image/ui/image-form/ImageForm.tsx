import { useTranslation } from 'react-i18next'
import FormRow from 'shared/ui/form-row'
import FormLabel from 'shared/ui/form-label'
import { Button, Card, Flex } from 'antd'
import { UseFormReturn } from 'react-hook-form'
import FormSelect from 'shared/ui/form-select'
import FormInput from 'shared/ui/form-input'
import FormTextArea from 'shared/ui/form-text-area'
import FormCard from 'shared/ui/form-card'

interface ImageFormProps {
  image?: any
  isLoading: boolean
  onSubmit: () => void
  form: UseFormReturn<any>
}

function ImageForm({ image, isLoading, onSubmit, form }: ImageFormProps) {
  const { t } = useTranslation()
  const { handleSubmit, control } = form

  return (
    <FormCard>
      <form className="h-100" onSubmit={handleSubmit(onSubmit)}>
        <Flex vertical className="h-100">
          <FormRow>
            <FormLabel htmlFor="boardId" required={true}>
              {t('board.board')}
            </FormLabel>
            <FormSelect
              control={control}
              name="boardId"
              mode="multiple"
              options={[
                { label: 'Board name 1', value: 1 },
                { label: 'Board name 2', value: 2 },
                { label: 'Board name 3', value: 3 },
                { label: 'Board name 4', value: 4 },
                { label: 'Board name 5', value: 5 },
              ]}
            />
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
              <Button type="primary" htmlType="submit">
                {t('action.save')}
              </Button>
            ) : (
              <Button type="primary" htmlType="submit">
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
