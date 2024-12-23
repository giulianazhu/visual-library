import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { lazy } from 'react'
import { IconContext } from 'react-icons'

import { Theme } from 'types/enums'
import { ErrorBoundary } from 'react-error-boundary'
import ThemeProvider from 'core/providers/theme'
import routes from 'core/configs/routes'
import AppLayout from 'shared/layouts/app-layout/AppLayout'
import Seo from 'shared/ui/seo'
import { HelmetProvider } from 'react-helmet-async'

const Login = lazy(() => import('pages/login'))
const Signup = lazy(() => import('pages/signup'))

const Dashboard = lazy(() => import('pages/dashboard'))
const Board = lazy(() => import('pages/board'))
const Image = lazy(() => import('pages/image'))
const Practice = lazy(() => import('pages/practice'))

const Settings = lazy(() => import('pages/settings'))
const Help = lazy(() => import('pages/help'))

function App() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Seo pageLabel="app.title">
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
                    <Route path={routes.image.url} element={<Image />} />
                    <Route path={routes.practice.url} element={<Practice />} />
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
        </Seo>
      </HelmetProvider>
    </BrowserRouter>
  )
}

export default App
