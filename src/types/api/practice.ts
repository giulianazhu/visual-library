export interface ApiPracticeImage {
  id: number
  url: string
}

export interface ApiCreatePractice {
  boards: number[]
  tags: number[]
  number: number
  sortBy: string
}
