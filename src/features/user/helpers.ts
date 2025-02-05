import { ApiUser } from 'types/api/user'

export const getLocalStorageUser = (): ApiUser | null => {
  const user = localStorage.getItem('user')
  return user ? JSON.parse(user) : null
}

export const setLocalStorageUser = (user: ApiUser) => {
  localStorage.setItem('user', JSON.stringify(user))
}
