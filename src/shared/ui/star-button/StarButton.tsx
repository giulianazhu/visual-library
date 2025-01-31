import style from './styles.module.scss'
import { StarEmptyIcon, StarFullIcon } from 'shared/icons'

interface StarButtonProps {
  active: boolean
  onClick: () => void
}

function StarButton({ active, onClick }: StarButtonProps) {
  return (
    <span className={style['star-button']} role="button">
      {active ? (
        <StarFullIcon className="star-icon" onClick={onClick} />
      ) : (
        <StarEmptyIcon className="star-icon" onClick={onClick} />
      )}
    </span>
  )
}

export default StarButton
