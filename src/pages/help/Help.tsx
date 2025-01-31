import Seo from 'shared/ui/seo'
import style from './styles.module.scss'
import { useTranslation } from 'react-i18next'

function Help() {
  const { t } = useTranslation()
  return (
    <Seo pageLabel="help.help">
      <div className="page">
        <div className={style['help']}>{t('general.pageUnderConstruction')}.</div>
      </div>
    </Seo>
  )
}

export default Help
