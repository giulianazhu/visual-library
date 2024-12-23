import { Flex } from 'antd'
import { useSearchImage } from 'features/image/store/search'
import ImagesList from 'features/image/ui/images-list'

import Searcher from 'shared/ui/searcher'

function Search() {
  // called the query hook
  const images = []

  return (
    <>
      <Flex align="center" justify="center">
        <div className="w-ab-700">
          <Searcher placeholderLabel="placeholder.searchBoard" searchContext={useSearchImage} />
        </div>
      </Flex>
      <ImagesList images={images} />
    </>
  )
}

export default Search
