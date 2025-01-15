import { useTranslation } from 'react-i18next'
import style from './styles.module.scss'
import FormCard from 'shared/ui/form-card'
import FormRow from 'shared/ui/form-row'
import { Button, Card, Col, Flex, InputNumber, Radio, Row, Select, Slider, Space, Switch } from 'antd'
import FormLabel from 'shared/ui/form-label'
import { useNavigate } from 'react-router'
import routes from 'core/configs/routes'
import { PracticeStatus, RoutePath } from 'types/enums'

interface PracticeFormProps {
  prop: string
}

function PracticeForm({ prop }: PracticeFormProps) {
  const { t } = useTranslation()

  const navigate = useNavigate()

  return (
    <Space direction="vertical" className={style['practice-form']}>
      <FormCard>
        <FormRow>
          <FormLabel htmlFor="boards">{t('board.boards')}</FormLabel>
          <Select />
        </FormRow>
        <FormRow>
          <FormLabel htmlFor="tags">{t('general.tags')}</FormLabel>
          <Select />
        </FormRow>
        <FormRow>
          <FormLabel htmlFor="size">{t('practice.number')}</FormLabel>
          <InputNumber />
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
      </FormCard>
    </Space>
  )
}

export default PracticeForm
