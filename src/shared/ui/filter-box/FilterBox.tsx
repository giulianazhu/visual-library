import { useTranslation } from 'react-i18next'
import style from './styles.module.scss'
import { Button, Card, Flex, Radio, Slider, Tag } from 'antd'
import { CloseIcon } from 'shared/icons'
import { StoreApi, UseBoundStore } from 'zustand'
import { InfiniteSearch } from 'types/store/common'

const tagsData = [1, 2, 3, 4]

const options2 = [
  { label: 'Most active first', value: 'desc' },
  { label: 'Least active first', value: 'asc' },
]

interface FilterBoxProps {
  open: boolean
  setOpen: (open: boolean) => void
  searchContext: UseBoundStore<StoreApi<InfiniteSearch>>
}

function FilterBox({ open, setOpen, searchContext }: FilterBoxProps) {
  const { t } = useTranslation()
  const { pars, setTags, setSortBy, setResetAll, setPageSize } = searchContext()

  const handleChange = (tag: number, checked: boolean) => {
    if (checked) {
      setTags([...pars.tags, tag])
    } else {
      setTags(pars.tags.filter((t) => t !== tag))
    }
  }

  return (
    <Flex vertical gap="large" className={style['filter-box']}>
      <Card title={t('search.filterByTags')}>
        <Flex wrap={true} gap="small">
          {tagsData.map((tag) => (
            <Tag.CheckableTag
              key={tag}
              checked={pars.tags.includes(tag)}
              onChange={(checked) => handleChange(tag, checked)}
            >
              {tag}
            </Tag.CheckableTag>
          ))}
          <Tag icon={<CloseIcon size={13} />} onClick={() => setTags([])} className="reset">
            {t('search.reset')}
          </Tag>
        </Flex>
      </Card>
      <Card title={t('search.sortByActivity')}>
        <Radio.Group
          block
          options={options2}
          value={pars.sortBy.activity}
          optionType="button"
          buttonStyle="solid"
          onChange={(e) => setSortBy({ ...pars.sortBy, activity: e.target.value })}
        />
      </Card>
      <Card title={t('search.showResults', { desc: pars.pageSize })}>
        <Slider
          min={10}
          max={50}
          step={10}
          marks={{ 10: 10, 20: 20, 30: 30, 40: 40, 50: 50 }}
          value={pars.pageSize}
          onChange={setPageSize}
        />
      </Card>
      <Flex vertical gap="small">
        <Button>{t('search.applyFilters')}</Button>
        <Button className="reset-all" type="link" onClick={setResetAll}>
          {t('search.resetAll')}
        </Button>
      </Flex>
    </Flex>
  )
}

export default FilterBox
