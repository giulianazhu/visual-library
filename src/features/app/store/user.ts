import { ApiUserTag } from 'types/api/user'
import { ApiUser } from 'types/api/user'
import { create } from 'zustand'

interface UserStore {
  user: ApiUser
  userTags: ApiUserTag[]
  setUser: (user: ApiUser) => void
  setUserTags: (userTags: ApiUserTag[]) => void
}

const initialStore: UserStore = {
  user: {
    id: 0,
    username: '',
    email: '',
    nickname: '',
    preferredLanguage: '',
    preferredTheme: '',
  },
  userTags: [],
  setUser: () => {},
  setUserTags: () => {},
}

const useUserStore = create<UserStore>((set) => ({
  ...initialStore,
  setUser: (user: ApiUser) => set({ user }),
  setUserTags: (userTags: ApiUserTag[]) => set({ userTags }),
}))

export default useUserStore
