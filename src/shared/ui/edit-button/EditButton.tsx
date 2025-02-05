import style from './styles.module.scss'
import { EditPenIcon } from 'shared/icons'

interface EditButtonProps {
  onClick: () => void
}

function EditButton({ onClick }: EditButtonProps) {
  return (
    <span className={style['edit-button']} role="button" onClick={onClick}>
      <EditPenIcon className="edit-icon" />
    </span>
  )
}

export default EditButton
