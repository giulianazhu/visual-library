import { Button, Flex } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { useEditNote } from 'features/image/hooks/useEditNote'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'
import useToast from 'shared/hooks/useToast'
import { EditNoteIcon } from 'shared/icons'

interface EditNoteProps {
  note: string
}

function EditNote({ note }: EditNoteProps) {
  const [isEditNote, setIsEditNote] = useState(false)
  const [editableNote, setEditableNote] = useState(note)

  const { t } = useTranslation()
  const id = parseInt(useParams().subId!)
  const { isPending: isEditingNote, mutateAsync: mutateEditNote } = useEditNote(id ?? 0)
  const { showError, showSuccess, contextHolder } = useToast()

  const handleEditNote = async () => {
    try {
      const res = await mutateEditNote(editableNote || '')
      if (res.error) {
        throw new Error('error')
      }
      setIsEditNote(false)
      showSuccess()
    } catch (error) {
      if (error instanceof Error) showError()
    }
  }
  return (
    <>
      {contextHolder}
      <Flex vertical className="notes">
        <Flex align="center" justify="space-between">
          <label className="notes-label">{t('image.notes')}</label>
          <Flex>
            {isEditNote ? (
              <Flex gap="small">
                <Button type="link" className="px-0" onClick={() => setIsEditNote(false)}>
                  {t('action.cancel')}
                </Button>
                <Button
                  type="link"
                  className="text-underline font-500 px-0"
                  onClick={handleEditNote}
                  loading={isEditingNote}
                >
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
            <TextArea
              value={editableNote}
              className="notes-form"
              autoSize={true}
              onChange={(e) => setEditableNote(e.target.value)}
            />
          ) : (
            <div className="notes-content subtitle">{note}</div>
          )}
        </Flex>
      </Flex>
    </>
  )
}

export default EditNote
