import { useTranslation } from 'react-i18next'
import style from './styles.module.scss';

interface ButtonProps {
  prop: string
}

function Button({prop}: ButtonProps){

  const { t } = useTranslation()

  return (
    <div className={style['button']}>
      {t('Button')}
    </div>
  )
}

export default Button
