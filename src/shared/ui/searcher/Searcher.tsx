import style from './styles.module.scss'
import { Button, Flex, Input } from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import FilterBox from '../filter-box'
import { StoreApi, UseBoundStore } from 'zustand'
import FormDrawer from '../form-drawer'
import { SearchStore } from 'types/store/common'

interface SearcherProps<T extends SearchStore> {
  placeholderLabel?: string
  useSearchContext: UseBoundStore<StoreApi<T>>
}

function Searcher<T extends SearchStore>({ placeholderLabel, useSearchContext }: SearcherProps<T>) {
  const [showFilters, setShowFilters] = useState(false)
  const { t } = useTranslation()
  const { query, setQuery } = useSearchContext()
  const [search, setSearch] = useState(query)

  return (
    <>
      <Flex vertical gap="small" className={style['searcher']}>
        <Input.Search
          placeholder={t(placeholderLabel || 'placeholder.search')}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onSearch={() => setQuery(search)}
        />
        <FormDrawer
          open={showFilters}
          setOpen={setShowFilters}
          title={t('search.advancedFilters')}
          customDrawerButton={
            <Button type="link" onClick={() => setShowFilters(true)} className="show-filters">
              {t('search.advancedFilters')}
            </Button>
          }
        >
          <FilterBox<T> setOpen={setShowFilters} useSearchContext={useSearchContext} />
        </FormDrawer>
      </Flex>
    </>
  )
}

export default Searcher
