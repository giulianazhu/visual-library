import './App.css'
import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation()
  return (
    <>
      <div>{t('translation.welcome')}</div>
    </>
  )
}

export default App
