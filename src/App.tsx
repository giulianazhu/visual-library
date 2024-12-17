import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import './App.css'
import { lazy } from 'react'
import { IconContext } from 'react-icons'

import { Theme } from '@app-types/enums'
import { ErrorBoundary } from 'react-error-boundary'
import ThemeProvider from 'core/providers/theme'
import SeoProvider from 'core/providers/seo'
import routes from '@configs/routes'
import AppLayout from 'shared/layouts/app-layout/AppLayout'

const Login = lazy(() => import('@pages/login'))
const Signup = lazy(() => import('@pages/signup'))

const Dashboard = lazy(() => import('@pages/dashboard'))
const Board = lazy(() => import('@pages/board'))
const Vision = lazy(() => import('@pages/vision'))

const Settings = lazy(() => import('@pages/settings'))
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
                {/* <ProtectedRoutes> */}

                <Route path="/" element={<AppLayout />}>
                  <Route index element={<Navigate replace to="dashboard" />} />
                  <Route path={routes.dashboard.url} element={<Dashboard />} />
                  <Route path={routes.board.url} element={<Board />} />
                  <Route path={routes.image.url} element={<Vision />} />
                  <Route path={routes.practice.url} element={<Vision />} />
                </Route>
                <Route path={routes.settings.url} element={<Settings />} />
                <Route path={routes.help.url} element={<Help />} />

                <Route path={routes.login.url} element={<Login />} />
                <Route path={routes.signup.url} element={<Signup />} />
              </Routes>

              {/* </ProtectedRoutes> */}

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
