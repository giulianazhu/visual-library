import { useTranslation } from 'react-i18next'
import style from './styles.module.scss'
import { StarEmptyIcon } from 'shared/icons'

interface FloatStarIconProps {
  prop: string
}

function FloatStarIcon({ prop }: FloatStarIconProps) {
  const { t } = useTranslation()

  return (
    <span className={style['float-star-icon']}>
      <StarEmptyIcon onClick={() => console.log('clicked')} />
    </span>
  )
}

export default FloatStarIcon
