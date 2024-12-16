import { Theme } from 'types/enums'
import { createContext } from 'react'
import { useContext } from 'react'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextType>({ theme: Theme.Light, setTheme: () => null })

export function useThemeContext() {
  return useContext(ThemeContext)
}
