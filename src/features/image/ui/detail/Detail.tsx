import { useTranslation } from 'react-i18next'
import style from './styles.module.scss'
import { Button, Flex, Image, Skeleton, Space, Tag, Typography } from 'antd'
import { useThemeContext } from 'core/providers/theme'
import { useState } from 'react'
import { StarEmptyIcon, StarFullIcon } from 'shared/icons'
import FormDrawer from 'shared/ui/form-drawer'
import EditDetail from 'features/image/controllers/edit-detail'
import { ApiImage } from 'types/api/image'
import EditNote from 'features/image/controllers/edit-note'
import { mockTagsMap } from 'shared/utils/mockData'

interface DetailProps {
  image: ApiImage | undefined
  onStar: () => void
}

function Detail({ image, onStar }: DetailProps) {
  const [isEdit, setIsEdit] = useState(false)

  const { t } = useTranslation()
  const { theme } = useThemeContext()

  return (
    <>
      <div className={style['detail']}>
        <div className="detail-content">
          <div className="image-container">
            {image ? <Image src={image.url} key={theme} className="image" /> : <Skeleton.Image active />}
            {/* force re-render based on key ==> theme value to sync with theme switch else cannot open preview */}
          </div>
          <div className="text-container">
            {image ? (
              <>
                <Space direction="vertical">
                  <Flex justify="space-between" align="center">
                    <Typography.Title level={4}>{image.title}</Typography.Title>
                    <Flex gap="small">
                      <Button className="px-10" onClick={onStar}>
                        {image.isFavourite ? <StarFullIcon /> : <StarEmptyIcon />}
                      </Button>
                      <FormDrawer
                        open={isEdit}
                        setOpen={setIsEdit}
                        title={t('action.edit')}
                        customDrawerButton={<Button onClick={() => setIsEdit(true)}>{t('action.edit')}</Button>}
                      >
                        <EditDetail setIsEdit={setIsEdit} image={image} />
                      </FormDrawer>
                    </Flex>
                  </Flex>
                  <Typography.Text className="fontsize-13">{image.description}</Typography.Text>
                  <Space>{image?.tags?.map((tagId: number) => <Tag key={tagId}>{mockTagsMap[tagId]}</Tag>)}</Space>
                </Space>
                <EditNote note={image.note || ''} />
              </>
            ) : (
              <div className="p-15 pt-30">
                <Skeleton active />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail
