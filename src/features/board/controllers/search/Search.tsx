import { Button, Flex } from 'antd'
import { useSearchBoard } from 'features/board/store/search'
import BoardsList from 'features/board/ui/boards-list'
import { useState } from 'react'
import ListHeader from 'shared/ui/list-header'

import Searcher from 'shared/ui/searcher'

function Search() {
  const [deleteBoards, setDeleteBoards] = useState<number[]>([])

  // called the query hook
  const boards = [
    { id: 1, title: 'Board 1', isFavourite: true },
    { id: 2, title: 'Board 2', isFavourite: false },
    { id: 3, title: 'Board 3', isFavourite: true },
  ]

  const onCheckAllChange = () => {
    deleteBoards.length === boards.length ? setDeleteBoards([]) : setDeleteBoards(boards.map((board) => board.id))
  }
  const handleDelete = () => {}

  return (
    <>
      <Flex align="center" justify="center">
        <div className="w-ab-700">
          <Searcher placeholderLabel="placeholder.searchBoard" searchContext={useSearchBoard} />
        </div>
      </Flex>
      <ListHeader
        checkedList={deleteBoards}
        checkAll={deleteBoards.length === boards.length}
        onChange={setDeleteBoards}
        onCheckAllChange={onCheckAllChange}
      >
        <BoardsList boards={boards} />
      </ListHeader>
    </>
  )
}

export default Search
