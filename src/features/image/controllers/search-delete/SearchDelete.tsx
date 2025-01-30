import { Flex, Skeleton } from 'antd'
import { useSearchBoard } from 'features/board/store/search'
import { useDelete } from 'features/image/hooks/useDelete'
import useSearch from 'features/image/hooks/useSearch'
import ImagesList from 'features/image/ui/images-list'
import { useState } from 'react'
import useToast from 'shared/hooks/useToast'
import ListHeader from 'shared/ui/list-header'

import Searcher from 'shared/ui/searcher'

function SearchDelete() {
  const [deleteImages, setDeleteImages] = useState<number[]>([])

  const { isPending: isSearching, data: images } = useSearch()
  const { isPending: isDeleting, mutateAsync: mutateDelete } = useDelete()
  const { showSuccess, showError, contextHolder } = useToast()

  const onCheckAllChange = () => {
    deleteImages.length === images?.length
      ? setDeleteImages([])
      : setDeleteImages(images?.map((image) => image.id) ?? [])
  }

  const handleDelete = async () => {
    try {
      const res = await mutateDelete(deleteImages)
      if (res.error) {
        throw new Error('error')
      }
      showSuccess()
      setDeleteImages([])
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
        checkedList={deleteImages}
        checkAll={deleteImages.length === images?.length}
        onChange={setDeleteImages}
        onCheckAllChange={onCheckAllChange}
        onDelete={handleDelete}
        disabled={isSearching}
        isDeleting={isDeleting}
      >
        {!images ? <Skeleton active /> : <ImagesList images={images} />}
      </ListHeader>
    </>
  )
}

export default SearchDelete
