import style from './styles.module.scss'
import { AddIcon } from 'shared/icons'
import FormDrawer from 'shared/ui/form-drawer'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Create from 'features/image/controllers/create'
import EditItem from 'features/image/controllers/edit-item'
import { ApiImage } from 'types/api/image'

interface ImagesListProps {
  images: ApiImage[] | undefined
}

function ImagesList({ images }: ImagesListProps) {
  const [isCreate, setIsCreate] = useState(false)
  const { t } = useTranslation()
  return (
    <div className={style['images-list']}>
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
      {images?.map((image, i) => <EditItem image={image} key={i} />)}
    </div>
  )
}

export default ImagesList
