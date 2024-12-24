import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'core/styles/index.scss'
import App from './App.tsx'
import initLanguage from 'core/locale/i18n.js'
// initializing i18n
// import 'core/locale/i18n'
const onLoad = async () => {
  await initLanguage()
  return createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

onLoad()
