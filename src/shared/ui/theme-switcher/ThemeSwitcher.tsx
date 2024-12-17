import { useTranslation } from 'react-i18next'
import style from './styles.module.scss'
import { Switch } from 'antd'
import { useThemeContext } from 'core/providers/theme'
import { Theme } from '@app-types/enums'
import { MoonIcon, SunIcon } from 'shared/icons'
import { darkThemeColors } from 'core/themes/dark'

function ThemeSwitcher() {
  const { theme, setTheme } = useThemeContext()

  return (
    <Switch
      checkedChildren={<MoonIcon />}
      unCheckedChildren={<SunIcon color={darkThemeColors.textHover} />}
      onChange={() => setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light)}
    />
  )
}

export default ThemeSwitcher
