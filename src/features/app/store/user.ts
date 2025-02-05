import { getLocalStorageUser } from 'features/user/helpers'
import { ApiUser } from 'types/api/user'
import { create } from 'zustand'

interface UserStore {
  user: ApiUser
  setUser: (user: ApiUser) => void
}

const initialStore: UserStore = {
  user: {
    id: 0,
    username: '',
    email: '',
    nickname: '',
    tags: getLocalStorageUser()?.tags || [],
    boards: getLocalStorageUser()?.boards || [],
    preferredLanguage: getLocalStorageUser()?.preferredLanguage || 'en',
    preferredTheme: '',
  },
  setUser: () => {},
}

const useUserStore = create<UserStore>((set) => ({
  user: initialStore.user,
  setUser: (user: ApiUser) => set({ user }),
}))

export default useUserStore
