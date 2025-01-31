import { useTranslation } from 'react-i18next'
import style from './styles.module.scss'
import { Button, Card, Flex, Radio, Slider, Tag } from 'antd'
import { CloseIcon } from 'shared/icons'
import { StoreApi, UseBoundStore } from 'zustand'
import { SortBy } from 'types/enums'
import useUserStore from 'features/app/store/user'
import { useState } from 'react'
import { SearchStore } from 'types/store/common'

interface FilterBoxProps<T extends SearchStore> {
  setOpen: (open: boolean) => void
  useSearchContext: UseBoundStore<StoreApi<T>>
}

function FilterBox<T extends SearchStore>({ setOpen, useSearchContext }: FilterBoxProps<T>) {
  const { t } = useTranslation()
  const { tags: userTags } = useUserStore((state) => state.user)
  const { filters, setFilters, setResetFilters } = useSearchContext()

  const [tags, setTags] = useState<number[]>(filters.tags)
  const [sortBy, setSortBy] = useState(filters.sortBy)
  const [limit, setLimit] = useState(filters.limit)

  const handleChange = (tag: number, checked: boolean) => {
    if (checked) {
      setTags([...tags, tag])
    } else {
      setTags(tags.filter((t) => t !== tag))
    }
  }

  const handleApplyFilters = () => {
    setFilters({ tags, sortBy, limit })
    setOpen(false)
  }

  const options = [
    { label: t('general.sortBy.activeFirst'), value: SortBy.ActiveFirst },
    { label: t('general.sortBy.activeLast'), value: SortBy.ActiveLast },
  ]
  return (
    <Flex vertical gap="large" className={style['filter-box']}>
      <Card title={t('search.filterByTags')}>
        <Flex wrap={true} gap="small">
          {userTags?.map((tag) => (
            <Tag.CheckableTag
              key={tag.id}
              checked={tags.includes(tag.id)}
              onChange={(checked) => handleChange(tag.id, checked)}
            >
              {tag.name}
            </Tag.CheckableTag>
          ))}
          <Tag icon={<CloseIcon size={13} />} onClick={() => setTags([])} className="reset ">
            {t('search.reset')}
          </Tag>
        </Flex>
      </Card>
      <Card title={t('search.sortByActivity')}>
        <Radio.Group
          block
          options={options}
          value={sortBy}
          optionType="button"
          buttonStyle="solid"
          onChange={(e) => setSortBy(e.target.value)}
        />
      </Card>
      <Card title={t('search.showResults', { desc: limit })}>
        <Slider
          min={10}
          max={50}
          step={10}
          marks={{ 10: 10, 20: 20, 30: 30, 40: 40, 50: 50 }}
          value={limit}
          onChange={(val) => setLimit(val)}
        />
      </Card>
      <Flex vertical gap="small">
        <Button onClick={handleApplyFilters}>{t('search.applyFilters')}</Button>
        <Button className="reset-all" type="link" onClick={setResetFilters}>
          {t('search.resetAll')}
        </Button>
      </Flex>
    </Flex>
  )
}

export default FilterBox
