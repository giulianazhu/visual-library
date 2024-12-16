import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import './App.css'
import { lazy } from 'react'
import { IconContext } from 'react-icons'

import { Theme } from '@app-types/enums'
import { ErrorBoundary } from 'react-error-boundary'
import ThemeProvider from 'core/providers/theme'
import SeoProvider from 'core/providers/seo'

const Dashboard = lazy(() => import('@pages/dashboard'))
const Login = lazy(() => import('@pages/login'))
const Help = lazy(() => import('@pages/help'))

function App() {
  return (
    <BrowserRouter>
      <SeoProvider defaultTitle="Vision">
        <IconContext.Provider value={{ className: 'react-icon' }}>
          <ThemeProvider initialTheme={Theme.Light}>
            <ErrorBoundary fallback={<div>Error</div>}>
              {/* <AuthProvider> */}
              {/* <UserProvider> */}

              <Routes>
                <Route index element={<Navigate replace to="dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="login" element={<Login />} />
                <Route path="help" element={<Help />} />
              </Routes>
              {/* </UserProvider> */}
              {/* </AuthProvider> */}
            </ErrorBoundary>
          </ThemeProvider>
        </IconContext.Provider>
      </SeoProvider>
    </BrowserRouter>
  )
}

export default App
