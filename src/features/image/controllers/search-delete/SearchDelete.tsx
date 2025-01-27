import { Flex } from 'antd'
import EditItem from 'features/board/controllers/edit-item'
import { useSearchBoard } from 'features/board/store/search'
import { useDelete } from 'features/image/hooks/useDelete'
import useSearch from 'features/image/hooks/useSearch'
import ImagesList from 'features/image/ui/images-list'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import useToast from 'shared/hooks/useToast'
import ListHeader from 'shared/ui/list-header'

import Searcher from 'shared/ui/searcher'

function SearchDelete() {
  const [deleteImages, setDeleteImages] = useState<number[]>([])
  const [deleteBoards, setDeleteBoards] = useState<number[]>([])

  const { isPending: isSearching, data } = useSearch()
  const { isPending: isDeleting, mutateAsync: mutateDelete } = useDelete()
  const { showSuccess, showError, contextHolder } = useToast()

  const { t } = useTranslation()
  // called the query hook
  const images = [
    { id: 1, title: 'Image 1', url: '/src/assets/images/image1.jpg', isFavourite: true },
    { id: 2, title: 'Image 2', url: '/src/assets/images/image2.jpg', isFavourite: false },
    { id: 3, title: 'Image 3', url: '/src/assets/images/image3.jpg', isFavourite: true },
  ]

  const onCheckAllChange = () => {
    deleteImages.length === images.length ? setDeleteImages([]) : setDeleteImages(images.map((image) => image.id))
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
        checkedList={deleteImages}
        checkAll={deleteImages.length === images.length}
        onChange={setDeleteImages}
        onCheckAllChange={onCheckAllChange}
        onDelete={handleDelete}
        disabled={isSearching}
        isDeleting={isDeleting}
      >
        <ImagesList images={images} />
      </ListHeader>
    </>
  )
}

export default SearchDelete
