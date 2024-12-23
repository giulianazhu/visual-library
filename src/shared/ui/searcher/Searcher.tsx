import style from './styles.module.scss'
import { Button, Card, Drawer, Flex, Input, Radio, Tag } from 'antd'
import i18next from 'i18next'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const options = [
  { label: 'Most recent first', value: 'Apple' },
  { label: 'Least recent first', value: 'Pear' },
]

const options2 = [
  { label: 'Most active first', value: 'Apple' },
  { label: 'Least active first', value: 'Pear' },
]
interface SearcherProps {
  placeholder?: string
}

function Searcher({ placeholder = i18next.t('placeholder.search') }: SearcherProps) {
  const [showFilters, setShowFilters] = useState(false)
  const { t } = useTranslation()

  return (
    <Flex vertical gap="small" className={style['searcher']}>
      <Input.Search placeholder={placeholder} />
      <Button type="link" onClick={() => setShowFilters(true)} className="show-filters">
        {t('search.advancedFilters')}
      </Button>
      <Drawer open={showFilters} onClose={() => setShowFilters(false)} title={t('search.advancedFilters')}>
        <Flex vertical gap="large">
          <Card title={t('search.filterByTags')}>
            <Flex wrap={true} gap="small">
              <Tag>anatomy</Tag>
              <Tag>anatomy</Tag>
              <Tag>anatomy</Tag>
              <Tag>anatomy</Tag>
            </Flex>
          </Card>
          <Card title={t('search.sortByRecency')}>
            <Radio.Group block options={options} defaultValue="Apple" optionType="button" buttonStyle="solid" />
          </Card>
          <Card title={t('search.sortByActivity')}>
            <Radio.Group block options={options2} defaultValue="Apple" optionType="button" buttonStyle="solid" />
          </Card>
          <Button>{t('search.applyFilters')}</Button>
        </Flex>
      </Drawer>
    </Flex>
  )
}

export default Searcher
