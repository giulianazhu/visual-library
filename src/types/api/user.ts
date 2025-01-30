export interface ApiUser {
  id: number
  username: string
  password: string
  email: string
  nickname?: string
  preferredLanguage?: string
  preferredTheme?: string
  createdAt?: string
  modifiedAt?: string
}
