import { Flex } from 'antd'
import { useDelete } from 'features/board/hooks/useDelete'
import useSearch from 'features/board/hooks/useSearch'
import { useSearchBoard } from 'features/board/store/search'
import BoardsList from 'features/board/ui/boards-list'
import { useState } from 'react'
import useToast from 'shared/hooks/useToast'
import ListHeader from 'shared/ui/list-header'

import Searcher from 'shared/ui/searcher'

function SearchDelete() {
  const [deleteBoards, setDeleteBoards] = useState<number[]>([])
  const { isPending: isSearching, data } = useSearch()
  const { isPending: isDeleting, mutateAsync: mutateDelete } = useDelete()
  const { showSuccess, showError, contextHolder } = useToast()

  // called the query hook
  const boards = [
    { id: 1, title: 'Board 1', isFavourite: true },
    { id: 2, title: 'Board 2', isFavourite: false },
    { id: 3, title: 'Board 3', isFavourite: true },
  ]

  const onCheckAllChange = () => {
    deleteBoards.length === boards.length ? setDeleteBoards([]) : setDeleteBoards(boards.map((board) => board.id))
  }
  const handleDelete = async () => {
    try {
      const res = await mutateDelete(deleteBoards) // Perform the mutation
      if (res.error) {
        throw new Error('error')
      }
      showSuccess()
    } catch (error) {
      if (error instanceof Error) {
        showError()
      }
      console.error('Mutation failed:', error) // Handle unexpected errors
      // Show an error message or feedback
    }
  }
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
        onDelete={handleDelete}
        isDeleting={isDeleting}
        disabled={isSearching}
      >
        {isSearching ? <div>Searching...</div> : <BoardsList boards={boards} />}
      </ListHeader>
    </>
  )
}

export default SearchDelete
