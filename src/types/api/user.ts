export interface ApiUser {
  id: number
  username: string
  email: string
  nickname?: string
  preferredLanguage?: string
  preferredTheme?: string
  createdAt?: string
  modifiedAt?: string
}

export interface ApiUserTag {
  id: number
  name: string
}
