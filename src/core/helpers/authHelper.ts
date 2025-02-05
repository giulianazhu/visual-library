import { UserTokens } from 'types/store/user'
declare let window: Window
const { localStorage } = window

const AUTH_USER = 'AUTH_USER'

export const clearUser = async (): Promise<void> => {
  localStorage.removeItem(AUTH_USER)
}

const getTokens = async (): Promise<UserTokens | null> => {
  const json = localStorage.getItem(AUTH_USER)
  if (!json) {
    return null
  }
  return JSON.parse(json) as UserTokens
}

export const getAuthToken = async (): Promise<string | null> => {
  const user = await getTokens()
  return user?.token || null
}

export const isAuthenticated = async (): Promise<boolean> => {
  const token = await getAuthToken()
  return token != null
}

export const getRefreshToken = async (): Promise<string | null> => {
  const user = await getTokens()
  return user?.refreshToken || null
}

export const saveTokens = async (response: UserTokens): Promise<void> => {
  const { token, refreshToken } = response

  const tokens = {
    token,
    refreshToken,
  }

  localStorage.setItem(AUTH_USER, JSON.stringify(tokens))
}
