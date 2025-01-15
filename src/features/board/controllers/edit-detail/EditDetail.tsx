import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from 'antd'
import BoardForm from 'features/board/ui/board-form'
import BoardListItem from 'features/board/ui/board-list-item'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { boardSchema } from 'schemas/board'
import { EditPenIcon } from 'shared/icons'
import FormDrawer from 'shared/ui/form-drawer'
import IconWrapper from 'shared/ui/icon-wrapper'

interface EditDetailProps {
  board: any
}

function EditDetail({ board }: EditDetailProps) {
  const [isEdit, setIsEdit] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  const { t } = useTranslation()
  const form = useForm({ resolver: yupResolver(boardSchema), defaultValues: board })

  const handleSave = () => {}

  const handleDelete = () => {}

  return (
    <FormDrawer
      title={t('board.edit')}
      open={isEdit}
      setOpen={setIsEdit}
      customDrawerButton={
        <Button type="link" onClick={() => setIsEdit(true)}>
          <IconWrapper>
            <EditPenIcon size={15} />
            <span>{t('board.edit')}</span>
          </IconWrapper>
        </Button>
      }
    >
      <BoardForm form={form} isLoading={isSaving} onSubmit={handleSave} board={board} />
    </FormDrawer>
  )
}

export default EditDetail
