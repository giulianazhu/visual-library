import { Flex } from 'antd'
import { useSearchBoard } from 'features/board/store/search'
import BoardsList from 'features/board/ui/boards-list'

import Searcher from 'shared/ui/searcher'

function Search() {
  // called the query hook
  const boards = []

  return (
    <>
      <Flex align="center" justify="center">
        <div className="w-ab-700">
          <Searcher placeholderLabel="placeholder.searchBoard" searchContext={useSearchBoard} />
        </div>
      </Flex>
      <BoardsList boards={boards} />
    </>
  )
}

export default Search
