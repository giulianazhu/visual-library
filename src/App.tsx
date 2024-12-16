import Button from 'shared/ui/button'
import './App.css'
import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation()
  return (
    <>
      <Button label="Click Me" onClick={() => console.log('clicked')} />
      <div>{t('translation.welcome')}</div>
    </>
  )
}

export default App
