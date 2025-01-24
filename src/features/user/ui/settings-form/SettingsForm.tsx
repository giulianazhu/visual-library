import { useTranslation } from 'react-i18next'
import style from './styles.module.scss';

interface SettingsFormProps {
  prop: string
}

function SettingsForm({prop}: SettingsFormProps){

  const { t } = useTranslation()

  return (
    <div className={style['settings-form']}>
      {t('SettingsForm')}
    </div>
  )
}

export default SettingsForm
