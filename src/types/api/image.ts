export interface ApiImage {
  id: number
  boardId: number
  tags: number[]
  url: string
  isFavourite: boolean
  title?: string
  description?: string
  note?: string
  lastViewed?: string
  lastPracticed?: string
  createdAt?: string
  modifiedAt?: string
}

export type ApiCreateImage = Omit<ApiImage, 'id' | 'createdAt' | 'modifiedAt'>
