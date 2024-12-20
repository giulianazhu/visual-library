import { Button } from 'antd'
import style from './styles.module.scss'
import { useThemeContext } from 'core/providers/theme'
import { Theme } from '@app-types/enums'
import { useTranslation } from 'react-i18next'

function Dashboard() {
  const { theme, setTheme } = useThemeContext()
  const { t } = useTranslation()
  return (
    <>
      <div className={style['dashboard']}>Dashboard</div>
      <Button type="primary" onClick={() => setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark)}>
        {t('translation.welcome')}
      </Button>
    </>
  )
}

export default Dashboard
