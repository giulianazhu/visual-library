export interface ApiUser {
  id: number
  username: string
  email: string
  nickname?: string
  tags?: ApiUserTag[]
  boards: ApiUserBoard[]
  preferredLanguage?: string
  preferredTheme?: string
  createdAt?: string
  modifiedAt?: string
}

export interface ApiUserTag {
  id: number
  name: string
}

export interface ApiUserBoard {
  id: number
  name: string
}
