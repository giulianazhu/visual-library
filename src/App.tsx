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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const Login = lazy(() => import('pages/login'))

const Dashboard = lazy(() => import('pages/dashboard'))
const Board = lazy(() => import('pages/board'))
const Image = lazy(() => import('pages/image'))
const Practice = lazy(() => import('pages/practice'))

const User = lazy(() => import('pages/user'))
const Help = lazy(() => import('pages/help'))

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
})

function App() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Seo pageLabel="app.title">
          <IconContext.Provider value={{ className: 'react-icon' }}>
            <ThemeProvider initialTheme={Theme.Light}>
              <ErrorBoundary fallback={<div>Error</div>}>
                {/* <AuthProvider> */}
                <QueryClientProvider client={queryClient}>
                  <ReactQueryDevtools initialIsOpen={false} />
                  <Routes>
                    {/* <ProtectedRoutes> */}
                    <Route path="/" element={<AppLayout />}>
                      <Route index element={<Navigate replace to="dashboard" />} />
                      <Route path={routes.dashboard.url} element={<Dashboard />} />
                      <Route path={routes.board.url} element={<Board />} />
                      {/* <Route path={routes.boardNew.url} element={<Create />} /> */}
                      <Route path={routes.image.url} element={<Image />} />
                      <Route path={routes.practiceStatus.url} element={<Practice />} />
                      <Route path={routes.user.url} element={<User />} />
                      <Route path={routes.help.url} element={<Help />} />
                    </Route>
                    <Route path={routes.login.url} element={<Login />} />
                  </Routes>
                </QueryClientProvider>
                {/* </ProtectedRoutes> */}
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
