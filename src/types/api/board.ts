export interface ApiBoard {
  id: number
  userId: number
  title: string
  thumbnailImgs: string[]
  totalImgs: number
  isFavourite: boolean
  tags?: number[]
  description?: string
  lastViewed?: string
  createdAt?: string
  modifiedAt?: string
}

export type ApiCreateBoard = Pick<ApiBoard, 'title' | 'description' | 'tags'>
