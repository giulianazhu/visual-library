import Button from 'shared/ui/Button/Button'
import './App.css'
import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation()
  return (
    <>
      <Button label="Click Me" />
      <div>{t('translation.welcome')}</div>
    </>
  )
}

export default App
