import { yupResolver } from '@hookform/resolvers/yup'
import useLogin from 'features/app/hooks/useLogin'
import useUserStore from 'features/app/store/user'
import LoginForm from 'features/app/ui/login-form'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { loginSchema } from 'schemas/app'
import useToast from 'shared/hooks/useToast'
import { mockTags, mockUser } from 'shared/utils/mockData'
import { fakeFetcher } from 'shared/utils/utils'
import { ApiLogin } from 'types/api/app'

function LoginUser() {
  const [isBootstrapping, setIsBootstrapping] = useState(false)

  const { isPending: isAuthenticating, mutateAsync: mutatePost } = useLogin()
  const { showError, contextHolder } = useToast()
  const { setUser, setUserTags } = useUserStore((state) => state)
  const form = useForm({ resolver: yupResolver(loginSchema) })
  const navigate = useNavigate()

  const bootstrap = async (userid: number) => {
    console.log('assume fetching with userid', userid)
    const [userData, userTagsData] = await Promise.all([loadUser(), loadUserTags()])
    return { userData, userTagsData }
  }

  const loadUser = async () => {
    const res = await fakeFetcher(mockUser)
    if (res.data) {
      setUser(res.data)
    }
    return res.data
  }

  const loadUserTags = async () => {
    const res = await fakeFetcher(mockTags)
    if (res.data) {
      setUserTags(res.data)
    }
    return res.data
  }

  const handleLogin = async (user: ApiLogin) => {
    const res = await mutatePost(user)
    if (res.error) {
      showError()
    }
    setIsBootstrapping(true)
    await bootstrap(res.data.id)
    setIsBootstrapping(false)
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
