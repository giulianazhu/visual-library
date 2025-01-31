import { Flex } from 'antd'
import { useDelete } from 'features/board/hooks/useDelete'
import useSearch from 'features/board/hooks/useSearch'
import { useSearchBoard } from 'features/board/store/search'
import BoardsList from 'features/board/ui/boards-list'
import { useState } from 'react'
import useToast from 'shared/hooks/useToast'
import ListHeader from 'shared/ui/list-header'
import Searcher from 'shared/ui/searcher'
import SkeletonList from 'shared/ui/skeleton-list'

function SearchDelete() {
  const [deleteBoards, setDeleteBoards] = useState<number[]>([])
  const { isPending: isSearching, data: boards } = useSearch()
  const { isPending: isDeleting, mutateAsync: mutateDelete } = useDelete<number[]>()
  const { showSuccess, showError, contextHolder } = useToast()

  const onCheckAllChange = () => {
    deleteBoards.length === boards?.length
      ? setDeleteBoards([])
      : setDeleteBoards(boards?.map((board) => board.id) ?? [])
  }

  const handleDelete = async () => {
    try {
      const res = await mutateDelete(deleteBoards)
      if (res.error) {
        throw new Error('error')
      }
      showSuccess()
      setDeleteBoards([])
    } catch (error) {
      if (error instanceof Error) showError()
    }
  }

  return (
    <>
      {contextHolder}
      <Flex align="center" justify="center">
        <div className="w-ab-700">
          <Searcher placeholderLabel="placeholder.searchBoard" searchContext={useSearchBoard} />
        </div>
      </Flex>
      <ListHeader
        checkedList={deleteBoards}
        checkAll={deleteBoards.length === boards?.length}
        onChange={setDeleteBoards}
        onCheckAllChange={onCheckAllChange}
        onDelete={handleDelete}
        isDeleting={isDeleting}
        disabled={isSearching}
      >
        {isSearching ? <SkeletonList /> : <BoardsList boards={boards} />}
      </ListHeader>
    </>
  )
}

export default SearchDelete
