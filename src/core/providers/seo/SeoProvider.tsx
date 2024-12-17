import { useState } from 'react'
import { SeoContext } from './useSeoContext'
import { Helmet, HelmetProvider } from 'react-helmet-async'

interface SeoProviderProps extends React.PropsWithChildren {
  defaultTitle: string
}

function SeoProvider({ defaultTitle, children }: SeoProviderProps) {
  const [title, setTitle] = useState<string>(defaultTitle)

  return (
    <SeoContext.Provider value={{ title, setTitle }}>
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        {children}
      </HelmetProvider>
    </SeoContext.Provider>
  )
}

export default SeoProvider
