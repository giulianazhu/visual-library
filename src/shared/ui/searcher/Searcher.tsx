import style from './styles.module.scss'
import { Button, Flex, Input } from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import FilterBox from '../filter-box'
import { useSearchBoard } from 'features/board/store/search'
import { StoreApi, UseBoundStore } from 'zustand'
import { InfiniteSearch } from 'types/store/common'

interface SearcherProps {
  placeholderLabel?: string
  searchContext: UseBoundStore<StoreApi<InfiniteSearch>>
}

function Searcher({ placeholderLabel, searchContext }: SearcherProps) {
  const [showFilters, setShowFilters] = useState(false)
  const { t } = useTranslation()
  const { pars, setQuery } = useSearchBoard()

  return (
    <>
      <Flex vertical gap="small" className={style['searcher']}>
        <Input.Search
          placeholder={t(placeholderLabel || 'placeholder.search')}
          value={pars.query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="link" onClick={() => setShowFilters(true)} className="show-filters">
          {t('search.advancedFilters')}
        </Button>
      </Flex>
      <FilterBox open={showFilters} setOpen={setShowFilters} searchContext={searchContext} />
    </>
  )
}

export default Searcher
