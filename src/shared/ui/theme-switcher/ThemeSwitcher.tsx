import style from './styles.module.scss'
import { Switch } from 'antd'
import { useThemeContext } from 'core/providers/theme'
import { Theme } from 'types/enums'
import { MoonIcon, SunIcon } from 'shared/icons'

function ThemeSwitcher() {
  const { theme, setTheme } = useThemeContext()

  return (
    <Switch
      checked={theme === Theme.Dark}
      className={style.switcher}
      checkedChildren={<MoonIcon />}
      unCheckedChildren={<SunIcon />}
      onChange={() => setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light)}
    />
  )
}

export default ThemeSwitcher
