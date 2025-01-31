import { useTranslation } from 'react-i18next'
import style from './styles.module.scss'
import { Checkbox, Flex, Typography } from 'antd'
import { NavLink } from 'react-router'
import routes from 'core/configs/routes'
import { RoutePath } from 'types/enums'
import FormDrawer from 'shared/ui/form-drawer'
import BoardForm from '../board-form'
import { UseFormReturn } from 'react-hook-form'
import { ApiBoard } from 'types/api/board'
import StarButton from 'shared/ui/star-button'
import EditButton from 'shared/ui/edit-button'

interface BoardListItemProps {
  board: ApiBoard
  form: UseFormReturn<any>
  isEdit: boolean
  setIsEdit: (isEdit: boolean) => void
  isSaving: boolean
  onEdit: (data: any) => Promise<void>
  onStar: () => void
  onDelete: () => void
  isDeleting: boolean
}

function BoardListItem({
  board,
  form,
  isEdit,
  setIsEdit,
  isSaving,
  onEdit,
  onDelete,
  onStar,
  isDeleting,
}: BoardListItemProps) {
  const { t } = useTranslation()
  return (
    <Flex vertical gap="small" className={style['board-list-item']}>
      <Flex gap="small" className="board-actions">
        <StarButton active={board.isFavourite} onClick={onStar} />
        <FormDrawer
          title={t('board.edit')}
          open={isEdit}
          setOpen={setIsEdit}
          customDrawerButton={<EditButton onClick={() => setIsEdit(true)} />}
        >
          <BoardForm
            board={board}
            form={form}
            onSubmit={onEdit}
            onDelete={onDelete}
            isSubmitting={isSaving}
            isDeleting={isDeleting}
          />
        </FormDrawer>
      </Flex>
      <NavLink to={routes.board.url.replace(RoutePath.Detail, board.id.toString())}>
        <div className="board-container">
          <div className="board-grid">
            {board.thumbnailImgs?.map((img: string, index: number) => <img key={index} src={img} alt="thumbnail" />)}
          </div>
        </div>
      </NavLink>
      <Flex className="h-100" justify="space-between">
        <Flex vertical justify="center">
          <Typography.Text className="font-500">{board.title}</Typography.Text>
          <Typography.Text className="fontsize-12">
            {board.totalImgs} {t('board.items')}
          </Typography.Text>
        </Flex>

        <Checkbox value={board.id} />
      </Flex>
    </Flex>
  )
}

export default BoardListItem
