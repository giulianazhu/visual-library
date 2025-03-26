import { TestId } from 'types/enums'
import style from './styles.module.scss'
import { EditPenIcon } from 'shared/icons'

export interface EditButtonProps {
  onClick: () => void
}

function EditButton({ onClick }: EditButtonProps) {
  return (
    <span className={style['edit-button']} role="button" onClick={onClick}>
      <EditPenIcon className="edit-icon" data-testid={TestId.EditPenIcon} />
    </span>
  )
}

export default EditButton
