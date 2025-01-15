import { useTranslation } from 'react-i18next'
import style from './styles.module.scss'
import { Checkbox, Flex, Typography } from 'antd'
import { EditPenIcon, StarEmptyIcon } from 'shared/icons'
import { NavLink } from 'react-router'
import routes from 'core/configs/routes'
import { RoutePath } from 'types/enums'
import FormDrawer from 'shared/ui/form-drawer'
import BoardForm from '../board-form'
import { UseFormReturn } from 'react-hook-form'
import classNames from 'classnames'

interface BoardListItemProps {
  board: any
  form: UseFormReturn<any>
  isEdit: boolean
  setIsEdit: (isEdit: boolean) => void
  isSaving: boolean
  onEdit: () => void
  onStar: () => void
  onDelete: () => void
}

function BoardListItem({ board, form, isEdit, setIsEdit, isSaving, onEdit, onDelete, onStar }: BoardListItemProps) {
  const { t } = useTranslation()
  return (
    <Flex vertical gap="small" className={style['board-list-item']}>
      <Flex gap="small" className="board-actions">
        <span>
          <StarEmptyIcon className={classNames('star-icon', { active: board.isFavourite })} onClick={() => onStar()} />
        </span>
        <FormDrawer
          title={t('board.edit')}
          open={isEdit}
          setOpen={setIsEdit}
          customDrawerButton={
            <span>
              <EditPenIcon className="edit-icon" onClick={() => setIsEdit(true)} />
            </span>
          }
        >
          <BoardForm board={board} form={form} onSubmit={onEdit} onDelete={onDelete} isLoading={isSaving} />
        </FormDrawer>
      </Flex>
      <NavLink to={routes.board.url.replace(RoutePath.Detail, (1).toString())}>
        <div className="board-container">
          <div className="board-grid">
            <img src="/src/assets/images/image1.jpg" />
            <img src="/src/assets/images/image2.jpg" />
            <img src="/src/assets/images/image3.jpg" />
          </div>
        </div>
      </NavLink>
      <Flex className="h-100" justify="space-between">
        <Flex vertical justify="center">
          <Typography.Text className="font-500">{board.title}</Typography.Text>
          <Typography.Text className="fontsize-12">1234 items</Typography.Text>
        </Flex>

        <Checkbox value={board.id} />
      </Flex>
    </Flex>
  )
}

export default BoardListItem
