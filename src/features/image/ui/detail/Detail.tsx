import { useTranslation } from 'react-i18next'
import style from './styles.module.scss'
import { Button, Card, Drawer, Flex, Image, Select, Space, Tag, Typography } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { useThemeContext } from 'core/providers/theme'
import { useState } from 'react'
import { EditNoteIcon } from 'shared/icons'

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
        <Card>
          <div className="image-container">
            <Image src={image.src} key={theme} height="100%" />
            {/* force re-render based on key ==> theme value to sync with theme switch else cannot open preview */}
          </div>
          <div className="text-container">
            <Space direction="vertical">
              <Flex justify="space-between" align="center">
                <Typography.Title level={4}>{image.title}</Typography.Title>{' '}
                <Button onClick={() => setIsEdit(true)}>{t('button.edit')}</Button>
              </Flex>
              <Typography.Text>{image.description}</Typography.Text>
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
                        {t('button.cancel')}
                      </Button>
                      <Button type="link" className="text-underline font-500 px-0">
                        {t('button.save')}
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
                  <div className="notes-content">{image.notes}</div>
                )}
              </Flex>

              {/* <TextArea rows={4} value={image.notes} /> */}
            </Flex>
          </div>
        </Card>
      </div>
      <Drawer open={isEdit} onClose={() => setIsEdit(false)} title={t('button.edit')}>
        <Card>
          <form>
            <Select
              showSearch
              filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
              value={image.boardId}
              options={[
                { label: 'Board name 1', value: 1 },
                { label: 'Board name 2', value: 2 },
                { label: 'Board name 3', value: 3 },
              ]}
            ></Select>
          </form>
        </Card>
      </Drawer>
    </>
  )
}

export default Detail
