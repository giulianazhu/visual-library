import { Flex } from 'antd'
import EditDetail from 'features/board/controllers/edit-detail'
import { useSearchBoard } from 'features/board/store/search'
import ImagesList from 'features/image/ui/images-list'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ListHeader from 'shared/ui/list-header'

import Searcher from 'shared/ui/searcher'

function Search() {
  const [deleteImages, setDeleteImages] = useState<number[]>([])

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

  const handleDelete = () => {}

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
        customEditButton={<EditDetail board={{}} />}
      >
        <ImagesList images={images} />
      </ListHeader>
    </>
  )
}

export default Search
