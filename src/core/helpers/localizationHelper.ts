import i18next from 'i18next'

export function getUserLanguage(): string {
  const lng = i18next.language || import.meta.env.VITE_LOCALE
  return lng
}

export function setUserLanguage(lng: string): string {
  i18next.changeLanguage(lng)
  return lng
}
