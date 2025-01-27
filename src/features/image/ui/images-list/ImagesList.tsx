import style from './styles.module.scss'
import { Flex, Space } from 'antd'
import { AddIcon } from 'shared/icons'
import FormDrawer from 'shared/ui/form-drawer'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Create from 'features/image/controllers/create'
import EditItem from 'features/image/controllers/edit-item'

interface ImagesListProps {
  images: any[]
}

function ImagesList({ images }: ImagesListProps) {
  const [isCreate, setIsCreate] = useState(false)
  const { t } = useTranslation()
  return (
    <Flex gap="small" wrap={true} className={style['images-list']}>
      {images.map((image, i) => (
        // maybe two separate edit one for editboardlistitem, editboarddetail or imagelistitem imagedetail
        <EditItem image={image} key={i} />
      ))}
      <FormDrawer
        title={t('board.create')}
        open={isCreate}
        setOpen={setIsCreate}
        customDrawerButton={
          <div className="add-board" onClick={() => setIsCreate(true)}>
            <AddIcon size={30} />
          </div>
        }
      >
        <Create />
      </FormDrawer>
    </Flex>
  )
}

export default ImagesList
