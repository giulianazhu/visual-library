import { useTranslation } from 'react-i18next'
import style from './styles.module.scss'
import FormCard from 'shared/ui/form-card'
import FormRow from 'shared/ui/form-row'
import { Button, Card, Col, Flex, InputNumber, Radio, Row, Select, Slider, Space, Switch } from 'antd'
import FormLabel from 'shared/ui/form-label'
import { useNavigate } from 'react-router'
import routes from 'core/configs/routes'
import { PracticeStatus, RoutePath } from 'types/enums'
import FormSelect from 'shared/ui/form-select'
import { UseFormReturn } from 'react-hook-form'
import FormInput from 'shared/ui/form-input'

interface PracticeFormProps {
  onSubmit: (form: any) => void
  form: UseFormReturn<any>
}

function PracticeForm({ onSubmit, form }: PracticeFormProps) {
  const { t } = useTranslation()

  const navigate = useNavigate()

  const { control, handleSubmit } = form

  return (
    <Space direction="vertical" className={style['practice-form']}>
      <FormCard>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormRow>
            <FormLabel htmlFor="boards">{t('board.boards')}</FormLabel>
            <FormSelect control={control} name="boards" options={[]} />
          </FormRow>
          <FormRow>
            <FormLabel htmlFor="tags">{t('general.tags')}</FormLabel>
            <FormSelect control={control} name="tags" options={[]} />
          </FormRow>
          <FormRow>
            <FormLabel htmlFor="size">{t('practice.number')}</FormLabel>
            <FormInput control={control} name="size" type="number" />
          </FormRow>
          <FormRow>
            <FormLabel htmlFor="sortBy">{t('search.sortBy')}</FormLabel>
            <Radio.Group
              block
              options={[
                { label: 'test', value: 'test' },
                { label: 'test2', value: 'test2' },
              ]}
              // value={pars.sortBy.activity}
              optionType="button"
              buttonStyle="solid"
              // onChange={(e) => setSortBy({ ...pars.sortBy, activity: e.target.value })}
            />
          </FormRow>
          <FormRow>
            <Col span={6}>
              <FormLabel htmlFor="isTimed">{t('practice.isTimed')}</FormLabel>
              <Switch />
            </Col>
          </FormRow>
          <div className="sub-card">
            <FormRow>
              {/* seconds */}
              <FormLabel htmlFor="duration">{t('practice.duration')}</FormLabel>
              <Slider />
            </FormRow>
            <FormRow>
              {/* seconds */}
              <FormLabel htmlFor="pause">{t('practice.pause')}</FormLabel>
              <Slider />
            </FormRow>
          </div>
          <Row justify="end">
            <Button
              type="primary"
              onClick={() => navigate(routes.practiceStatus.url.replace(RoutePath.Status, PracticeStatus.Start))}
            >
              Start
            </Button>
          </Row>
        </form>
      </FormCard>
    </Space>
  )
}

export default PracticeForm
