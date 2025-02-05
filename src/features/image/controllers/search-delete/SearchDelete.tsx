import { Flex } from 'antd'
import { useDelete } from 'features/image/hooks/useDelete'
import useSearch from 'features/image/hooks/useSearch'
import { SearchImageStore, useSearchImage } from 'features/image/store/search'
import ImagesList from 'features/image/ui/images-list'
import { useState } from 'react'
import useToast from 'shared/hooks/useToast'
import ListHeader from 'shared/ui/list-header'

import Searcher from 'shared/ui/searcher'
import SkeletonList from 'shared/ui/skeleton-list'

function SearchDelete() {
  const [deleteImages, setDeleteImages] = useState<number[]>([])
  const { query, filters } = useSearchImage()
  const { isPending: isSearching, data: images } = useSearch(query, filters)
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
          <Searcher<SearchImageStore> placeholderLabel="placeholder.searchBoard" useSearchContext={useSearchImage} />
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
        {!images ? <SkeletonList /> : <ImagesList images={images} />}
      </ListHeader>
    </>
  )
}

export default SearchDelete
