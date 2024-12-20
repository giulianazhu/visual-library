import { Button } from 'antd'
import style from './styles.module.scss'
import { useThemeContext } from 'core/providers/theme'
import { Theme } from '@app-types/enums'

function Dashboard() {
  const { theme, setTheme } = useThemeContext()
  return (
    <>
      <div className={style['dashboard']}>Dashboard</div>
      <Button type="primary" onClick={() => setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark)}>
        Hello{' '}
      </Button>
    </>
  )
}

export default Dashboard
