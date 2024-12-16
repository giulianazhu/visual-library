import { useState } from 'react'
import { SeoContext } from './useSeoContext'

interface SeoProviderProps extends React.PropsWithChildren {
  defaultTitle: string
}

function SeoProvider({ defaultTitle, children }: SeoProviderProps) {
  const [title, setTitle] = useState<string>(defaultTitle)

  return <SeoContext.Provider value={{ title, setTitle }}>{children}</SeoContext.Provider>
}

export default SeoProvider
