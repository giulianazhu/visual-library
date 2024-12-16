import { useEffect, useState } from 'react'
import { ConfigProvider } from 'antd'
import { LocalStorageKey, Theme } from '@app-types/enums'
import { commonTheme } from '../../themes/common'
import { lightTheme } from '../../themes/light'
import { darkTheme } from '../../themes/dark'
import { ThemeContext } from './useThemeContext'

interface ThemeProviderProps extends React.PropsWithChildren {
  initialTheme: Theme
}

function ThemeProvider({ initialTheme, children }: ThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(initialTheme)

  const setBodyClass = (theme: Theme) => {
    document.body.classList.remove(currentTheme)
    document.body.classList.add(theme)
  }

  const setTheme = (newTheme: Theme) => {
    localStorage.setItem(LocalStorageKey.Theme, newTheme)
    setBodyClass(newTheme)
    setCurrentTheme(newTheme)
  }

  useEffect(() => {
    const theme = localStorage.getItem(LocalStorageKey.Theme) as Theme
    if (theme) {
      setTheme(theme)
    } else {
      setBodyClass(initialTheme)
    }
  })

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, setTheme }}>
      <ConfigProvider theme={commonTheme}>
        <ConfigProvider theme={currentTheme === Theme.Light ? lightTheme : darkTheme}>{children}</ConfigProvider>
      </ConfigProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
