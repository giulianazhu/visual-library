import { useTranslation } from 'react-i18next'
import style from './styles.module.scss'
import { Button, Flex, Image, Space, Tag, Typography } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { useThemeContext } from 'core/providers/theme'
import { useState } from 'react'
import { EditNoteIcon, StarEmptyIcon, StarFullIcon } from 'shared/icons'
import FormDrawer from 'shared/ui/form-drawer'
import EditDetail from 'features/image/controllers/edit-detail'

interface DetailProps {
  image: Record<string, any>
}

function Detail({ image }: DetailProps) {
  const [isEdit, setIsEdit] = useState(false)
  const [isEditNote, setIsEditNote] = useState(false)
  const { t } = useTranslation()
  const { theme } = useThemeContext()

  return (
    <>
      <div className={style['detail']}>
        <div className="detail-content">
          <div className="image-container">
            <Image src={image.src} key={theme} height="100%" />
            {/* force re-render based on key ==> theme value to sync with theme switch else cannot open preview */}
          </div>
          <div className="text-container">
            <Space direction="vertical">
              <Flex justify="space-between" align="center">
                <Typography.Title level={4}>{image.title}</Typography.Title>
                <Flex gap="small">
                  <Button className="px-10">{image.isFavourite ? <StarFullIcon /> : <StarEmptyIcon />}</Button>
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
              <Space>
                {image.tags.map((tag: string) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </Space>
            </Space>
            <Flex vertical className="notes">
              <Flex align="center" justify="space-between">
                <label className="notes-label">{t('image.notes')}</label>
                <Flex>
                  {isEditNote ? (
                    <Flex gap="small">
                      <Button type="link" className="px-0" onClick={() => setIsEditNote(false)}>
                        {t('action.cancel')}
                      </Button>
                      <Button type="link" className="text-underline font-500 px-0">
                        {t('action.save')}
                      </Button>
                    </Flex>
                  ) : (
                    <Button type="link" onClick={() => setIsEditNote(true)}>
                      <EditNoteIcon />
                    </Button>
                  )}
                </Flex>
              </Flex>
              <Flex vertical className="notes-container">
                {isEditNote ? (
                  <TextArea value={image.notes} className="notes-form" autoSize={true} />
                ) : (
                  <div className="notes-content subtitle">{image.notes}</div>
                )}
              </Flex>
            </Flex>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail
