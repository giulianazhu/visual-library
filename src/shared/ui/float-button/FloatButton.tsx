import { useTranslation } from 'react-i18next'
import style from './styles.module.scss'

interface FloatButtonProps extends React.PropsWithChildren {
  hoverColor?: string
  onClick: () => void
}

function FloatButton({ onClick, children }: FloatButtonProps) {
  const { t } = useTranslation()

  return (
    <span className={style['float-button']} onClick={onClick}>
      {children}
    </span>
  )
}

export default FloatButton
