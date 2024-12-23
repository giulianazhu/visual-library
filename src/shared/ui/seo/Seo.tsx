import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

interface SeoProps extends React.PropsWithChildren {
  showPrefix?: boolean //if false ==> no starting prefix at all
  prefixLabel?: string //if not present ==> default CRM
  pageTitle?: string | null // if not present ==> render pageLabel = generic name ***in order to populate specific entity detail name
  pageLabel: string
}

function Seo({ prefixLabel, pageLabel, pageTitle, showPrefix = false, children }: SeoProps) {
  const { t } = useTranslation()
  const prefix = prefixLabel ? t(prefixLabel).concat(': ') : 'Visual'.concat(': ') // Default prefix
  const title = pageTitle ? pageTitle : t(pageLabel) // Default page title

  return (
    <>
      <Helmet>
        <title>{showPrefix ? prefix + title : title}</title>
      </Helmet>
      {children}
    </>
  )
}

export default Seo
