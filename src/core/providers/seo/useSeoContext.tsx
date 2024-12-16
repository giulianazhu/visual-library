import { createContext } from 'react'
import { useContext } from 'react'

interface SeoContextType {
  title: string
  setTitle: (title: string) => void
}

export const SeoContext = createContext<SeoContextType>({ title: '', setTitle: () => null })

export function useSeoContext() {
  return useContext(SeoContext)
}
