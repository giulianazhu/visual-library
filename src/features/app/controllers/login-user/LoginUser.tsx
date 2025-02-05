import { yupResolver } from '@hookform/resolvers/yup'
import { saveTokens } from 'core/helpers/authHelper'
import useLogin from 'features/app/hooks/useLogin'
import useUserStore from 'features/app/store/user'
import LoginForm from 'features/app/ui/login-form'
import { getLocalStorageUser, setLocalStorageUser } from 'features/user/helpers'
import { mapToUserTokens } from 'mappers/user'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { loginSchema } from 'schemas/app'
import useToast from 'shared/hooks/useToast'
import { mockUser, mockUsers } from 'shared/utils/mockData'
import { fakeFetcher } from 'shared/utils/utils'
import { ApiLogin } from 'types/api/app'

function LoginUser() {
  const [isBootstrapping, setIsBootstrapping] = useState(false)

  const { isPending: isAuthenticating, mutateAsync: mutatePost } = useLogin()
  const { showError, contextHolder } = useToast()
  const { setUser } = useUserStore((state) => state)
  const form = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      username: 'guest@gmail.com',
      password: 'guestpassword',
    },
  })
  const navigate = useNavigate()

  const loadUser = async (userId: number) => {
    const res = await fakeFetcher(mockUsers.find((user) => user.id === userId) || mockUser)
    if (res.data) {
      setUser(res.data)
    }
    return res.data
  }

  const bootstrap = async (userId: number) => {
    const user = getLocalStorageUser()
    if (!user || user.id !== userId) {
      const userData = await loadUser(userId)
      setLocalStorageUser(userData)
      setUser(userData)
    }
  }

  const handleLogin = async (user: ApiLogin) => {
    const res = await mutatePost(user)
    if (res.error) {
      showError()
    }
    setIsBootstrapping(true)
    await bootstrap(res.data.id)
    setIsBootstrapping(false)
    saveTokens(mapToUserTokens(res.data))
    navigate('/dashboard')
  }

  return (
    <>
      {contextHolder}
      <LoginForm isSubmitting={isAuthenticating || isBootstrapping} onSubmit={handleLogin} form={form} />
    </>
  )
}

export default LoginUser
