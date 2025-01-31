import { useTranslation } from 'react-i18next'
import style from './styles.module.scss'
import FormCard from 'shared/ui/form-card'
import FormRow from 'shared/ui/form-row'
import { Button, Col, Radio, Row, Slider, Space, Switch } from 'antd'
import FormLabel from 'shared/ui/form-label'
import { SortBy } from 'types/enums'
import FormSelect from 'shared/ui/form-select'
import { Controller, UseFormReturn } from 'react-hook-form'
import FormInput from 'shared/ui/form-input'
import useUserStore from 'features/app/store/user'
import { useConfigurePractice } from 'features/practice/store/practice'
import { ApiCreatePractice } from 'types/api/practice'

interface PracticeFormProps {
  onSubmit: (form: ApiCreatePractice) => void
  form: UseFormReturn<ApiCreatePractice>
  isSubmitting: boolean
}

function PracticeForm({ onSubmit, form, isSubmitting }: PracticeFormProps) {
  const { t } = useTranslation()
  const { control, handleSubmit } = form
  const { tags: userTags, boards: userBoards } = useUserStore((state) => state.user)
  const boardOptions = userBoards?.map((board) => ({ label: board.name, value: board.id })) ?? []
  const tagsOptions = userTags?.map((tag) => ({ label: tag.name, value: tag.id })) ?? []
  const { settings, setSettings } = useConfigurePractice((state) => state)

  return (
    <Space direction="vertical" className={style['practice-form']}>
      <FormCard>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormRow>
            <FormLabel htmlFor="boards">{t('board.boards')}</FormLabel>
            <FormSelect control={control} name="boards" options={boardOptions} mode="tags" />
          </FormRow>
          <FormRow>
            <FormLabel htmlFor="tags">{t('general.tags')}</FormLabel>
            <FormSelect control={control} name="tags" options={tagsOptions} mode="tags" />
          </FormRow>
          <FormRow>
            <FormLabel htmlFor="number">{t('practice.number')}</FormLabel>
            <FormInput control={control} name="number" type="number" />
          </FormRow>
          <FormRow>
            <FormLabel htmlFor="sortBy">{t('search.sortBy')}</FormLabel>
            <Controller
              name="sortBy"
              control={control}
              render={({ field }) => (
                <Radio.Group
                  {...field}
                  block
                  options={[
                    { label: t('general.sortBy.random'), value: SortBy.Random },
                    { label: t('general.sortBy.activeFirst'), value: SortBy.ActiveFirst },
                    { label: t('general.sortBy.activeLast'), value: SortBy.ActiveLast },
                  ]}
                  optionType="button"
                  buttonStyle="solid"
                />
              )}
            />
          </FormRow>
          <FormRow>
            <Col span={6}>
              <FormLabel htmlFor="isTimed">{t('practice.isTimed')}</FormLabel>
              <Switch value={settings.timed} onChange={(val) => setSettings({ timed: val })} />
            </Col>
          </FormRow>
          <div className="sub-card">
            <FormRow>
              <FormLabel htmlFor="duration">{`${t('practice.duration')} (${settings.timed ? settings.duration : '0'}s)`}</FormLabel>
              <Slider
                value={settings.timed ? settings.duration : 0}
                onChange={(val) => setSettings({ duration: val })}
                step={5}
                disabled={!settings.timed}
              />
            </FormRow>
          </div>
          <Row justify="end">
            <Button type="primary" htmlType="submit" loading={isSubmitting}>
              {t('action.start')}
            </Button>
          </Row>
        </form>
      </FormCard>
    </Space>
  )
}

export default PracticeForm
