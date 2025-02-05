import { getLocalStorageUser } from 'features/user/helpers'

export function getLanguage(): string {
  const lng = getLocalStorageUser()?.preferredLanguage || import.meta.env.VITE_LOCALE
  return lng
}
