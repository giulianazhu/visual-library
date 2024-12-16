import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@styles/index.scss'
import App from './App.tsx'
// initializing i18n
import 'core/locale/i18n'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
