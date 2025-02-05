import routes from 'core/configs/routes'
import { isAuthenticated } from 'core/helpers/authHelper'
import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router'

function AuthProvider({ children }: React.PropsWithChildren) {
  const navigate = useNavigate()

  const checkAuth = useCallback(async () => {
    const authenticated = await isAuthenticated()
    if (!authenticated) {
      navigate(routes.login.url)
    }
  }, [navigate])

  useEffect(() => {
    checkAuth()
  }, [])

  return <>{children}</>
}

export default AuthProvider
