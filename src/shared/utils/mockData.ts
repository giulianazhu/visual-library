import { ApiUserTag } from 'types/api/user'
import { ApiBoard } from 'types/api/board'
import { ApiImage } from 'types/api/image'
import { ApiUser } from 'types/api/user'
import { TagsMap } from 'types/store/app'

export const mockBoards: ApiBoard[] = [
  {
    id: 1,
    userId: 1,
    title: 'Board 1',
    isFavourite: true,
    totalImgs: 10,
    description: 'A collection for practicing anatomy.',
    tags: [0, 1],
    thumbnailImgs: ['/assets/images/image1.jpg', '/assets/images/image2.jpg', '/assets/images/image4.jpg'],
    lastViewed: '2025-01-01T12:30:00Z',
    createdAt: '2024-12-15T08:45:00Z',
    modifiedAt: '2025-01-10T10:20:00Z',
  },
  {
    id: 2,
    userId: 1,
    title: 'Board 2',
    isFavourite: false,
    totalImgs: 20,
    description: 'Collection of abstract landscapes.',
    tags: [1, 2],
    thumbnailImgs: ['/assets/images/image1.jpg', '/assets/images/image2.jpg', '/assets/images/image4.jpg'],
    lastViewed: '2025-01-03T09:00:00Z',
    createdAt: '2024-12-17T14:00:00Z',
    modifiedAt: '2025-01-12T11:10:00Z',
  },
  {
    id: 3,
    userId: 1,
    title: 'Board 3',
    isFavourite: true,
    totalImgs: 4,
    description: 'Board for sketching urban environments.',
    tags: [0],
    thumbnailImgs: ['/assets/images/image1.jpg', '/assets/images/image2.jpg', '/assets/images/image4.jpg'],
    lastViewed: '2025-01-05T16:45:00Z',
    createdAt: '2024-12-19T10:25:00Z',
    modifiedAt: '2025-01-15T13:30:00Z',
  },
  {
    id: 4,
    userId: 1,
    title: 'Board 4',
    isFavourite: true,
    totalImgs: 523,
    description: 'A vast collection of botanical sketches.',
    tags: [2, 3],
    thumbnailImgs: ['/assets/images/image1.jpg', '/assets/images/image2.jpg', '/assets/images/image4.jpg'],
    lastViewed: '2025-01-07T18:00:00Z',
    createdAt: '2024-12-22T07:30:00Z',
    modifiedAt: '2025-01-17T09:15:00Z',
  },
  {
    id: 5,
    userId: 1,
    title: 'Board 5',
    isFavourite: false,
    totalImgs: 2,
    description: 'A collection of still life drawings.',
    tags: [0, 1],
    thumbnailImgs: ['/assets/images/image1.jpg', '/assets/images/image2.jpg', '/assets/images/image4.jpg'],
    lastViewed: '2025-01-08T13:45:00Z',
    createdAt: '2024-12-25T15:50:00Z',
    modifiedAt: '2025-01-19T12:10:00Z',
  },
  {
    id: 6,
    userId: 1,
    title: 'Board 6',
    isFavourite: true,
    totalImgs: 1,
    description: 'Study of human figure poses.',
    tags: [0, 3],
    thumbnailImgs: ['/assets/images/image1.jpg'],
    lastViewed: '2025-01-09T10:25:00Z',
    createdAt: '2024-12-30T17:05:00Z',
    modifiedAt: '2025-01-20T14:40:00Z',
  },
  {
    id: 7,
    userId: 1,
    title: 'Board 7',
    isFavourite: true,
    totalImgs: 0,
    description: 'Sky and cloud studies.',
    tags: [1],
    thumbnailImgs: [],
    lastViewed: '2025-01-10T08:00:00Z',
    createdAt: '2025-01-01T12:30:00Z',
    modifiedAt: '2025-01-22T16:00:00Z',
  },
  {
    id: 8,
    userId: 1,
    title: 'Board 8',
    isFavourite: false,
    totalImgs: 101,
    description: 'A mix of fantasy landscapes and creatures.',
    tags: [2, 3],
    thumbnailImgs: ['/assets/images/image1.jpg', '/assets/images/image2.jpg', '/assets/images/image4.jpg'],
    lastViewed: '2025-01-12T11:30:00Z',
    createdAt: '2025-01-02T10:50:00Z',
    modifiedAt: '2025-01-23T15:25:00Z',
  },
  {
    id: 9,
    userId: 1,
    title: 'Board 9',
    isFavourite: true,
    totalImgs: 64,
    description: 'Surreal art collection featuring strange creatures.',
    tags: [3],
    thumbnailImgs: ['/assets/images/image1.jpg', '/assets/images/image2.jpg', '/assets/images/image4.jpg'],
    lastViewed: '2025-01-13T09:15:00Z',
    createdAt: '2025-01-04T14:40:00Z',
    modifiedAt: '2025-01-24T12:50:00Z',
  },
  {
    id: 10,
    userId: 1,
    title: 'Board 10',
    isFavourite: true,
    totalImgs: 3,
    description: 'A personal collection of cityscapes and architecture.',
    tags: [0, 2],
    thumbnailImgs: ['/assets/images/image1.jpg', '/assets/images/image2.jpg', '/assets/images/image4.jpg'],
    lastViewed: '2025-01-14T17:20:00Z',
    createdAt: '2025-01-06T09:30:00Z',
    modifiedAt: '2025-01-25T11:05:00Z',
  },
]

const mockNotes =
  ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo impedit, voluptates consectetur excepturi accusantium maxime assumenda autem quod id, cumque dolor animi. Quia quod ullam quam. Commodi suscipit delectus maiores. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat voluptates amet, eaque laborum obcaecati odit error voluptatibus officiis veniam autem magnam ab nam omnis quo maxime quidem porro? Laborum id!'

export const mockImages: ApiImage[] = [
  {
    id: 1,
    boardId: [1],
    tags: [0, 1],
    url: '/assets/images/image1.jpg',
    isFavourite: true,
    title: 'Anatomy Sketch',
    description: 'A sketch of the human hand.',
    note: 'Study the proportions of the hand.' + mockNotes,
    lastViewed: '2025-01-01T12:30:00Z',
    lastPracticed: '2025-01-01T12:30:00Z',
    createdAt: '2024-12-15T08:45:00Z',
    modifiedAt: '2025-01-10T10:20:00Z',
  },
  {
    id: 2,
    boardId: [1],
    tags: [0, 1],
    url: '/assets/images/image2.jpg',
    isFavourite: false,
    title: 'Anatomy Sketch',
    description: 'A sketch of the human foot.',
    note: 'Study the proportions of the foot.' + mockNotes,
    lastViewed: '2025-01-01T12:30:00Z',
    lastPracticed: '2025-01-01T12:30:00Z',
    createdAt: '2024-12-15T08:45:00Z',
    modifiedAt: '2025-01-10T10:20:00Z',
  },
  {
    id: 3,
    boardId: [1, 9],
    tags: [0, 1],
    url: '/assets/images/image3.jpg',
    isFavourite: true,
    title: 'Anatomy Sketch',
    description: 'A sketch of the human face.',
    note: 'Study the proportions of the face.' + mockNotes,
    lastViewed: '2025-01-01T12:30:00Z',
    lastPracticed: '2025-01-01T12:30:00Z',
    createdAt: '2024-12-15T08:45:00Z',
    modifiedAt: '2025-01-10T10:20:00Z',
  },
  {
    id: 4,
    boardId: [7],
    tags: [0, 1],
    url: '/assets/images/image1.jpg',
    isFavourite: true,
    title: 'Anatomy Sketch',
    description: 'A sketch of the human hand.',
    note: 'Study the proportions of the hand.' + mockNotes,
    lastViewed: '2025-01-01T12:30:00Z',
    lastPracticed: '2025-01-01T12:30:00Z',
    createdAt: '2024-12-15T08:45:00Z',
    modifiedAt: '2025-01-10T10:20:00Z',
  },
  {
    id: 5,
    boardId: [1],
    tags: [0, 1],
    url: '/assets/images/image2.jpg',
    isFavourite: false,
    title: 'Anatomy Sketch',
    description: 'A sketch of the human foot.',
    note: 'Study the proportions of the foot.' + mockNotes,
    lastViewed: '2025-01-01T12:30:00Z',
    lastPracticed: '2025-01-01T12:30:00Z',
    createdAt: '2024-12-15T08:45:00Z',
    modifiedAt: '2025-01-10T10:20:00Z',
  },
  {
    id: 6,
    boardId: [6],
    tags: [0, 1],
    url: '/assets/images/image3.jpg',
    isFavourite: true,
    title: 'Anatomy Sketch',
    description: 'A sketch of the human face.',
    note: 'Study the proportions of the face.' + mockNotes,
    lastViewed: '2025-01-01T12:30:00Z',
    lastPracticed: '2025-01-01T12:30:00Z',
    createdAt: '2024-12-15T08:45:00Z',
    modifiedAt: '2025-01-10T10:20:00Z',
  },
  {
    id: 7,
    boardId: [1, 5],
    tags: [0, 1],
    url: '/assets/images/image1.jpg',
    isFavourite: true,
    title: 'Anatomy Sketch',
    description: 'A sketch of the human hand.',
    note: 'Study the proportions of the hand.' + mockNotes,
    lastViewed: '2025-01-01T12:30:00Z',
    lastPracticed: '2025-01-01T12:30:00Z',
    createdAt: '2024-12-15T08:45:00Z',
    modifiedAt: '2025-01-10T10:20:00Z',
  },
  {
    id: 8,
    boardId: [2],
    tags: [0, 1],
    url: '/assets/images/image2.jpg',
    isFavourite: false,
    title: 'Anatomy Sketch',
    description: 'A sketch of the human foot.',
    note: 'Study the proportions of the foot.' + mockNotes,
    lastViewed: '2025-01-01T12:30:00Z',
    lastPracticed: '2025-01-01T12:30:00Z',
    createdAt: '2024-12-15T08:45:00Z',
    modifiedAt: '2025-01-10T10:20:00Z',
  },
  {
    id: 9,
    boardId: [3],
    tags: [0, 1],
    url: '/assets/images/image3.jpg',
    isFavourite: true,
    title: 'Anatomy Sketch',
    description: 'A sketch of the human face.',
    note: 'Study the proportions of the face.' + mockNotes,
    lastViewed: '2025-01-01T12:30:00Z',
    lastPracticed: '2025-01-01T12:30:00Z',
    createdAt: '2024-12-15T08:45:00Z',
    modifiedAt: '2025-01-10T10:20:00Z',
  },
  {
    id: 10,
    boardId: [1, 2],
    tags: [0, 1],
    url: '/assets/images/image1.jpg',
    isFavourite: true,
    title: 'Anatomy Sketch',
    description: 'A sketch of the human hand.',
    note: 'Study the proportions of the hand.' + mockNotes,
    lastViewed: '2025-01-01T12:30:00Z',
    lastPracticed: '2025-01-01T12:30:00Z',
    createdAt: '2024-12-15T08:45:00Z',
    modifiedAt: '2025-01-10T10:20:00Z',
  },
  {
    id: 11,
    boardId: [1],
    tags: [0, 1],
    url: '/assets/images/image2.jpg',
    isFavourite: false,
    title: 'Anatomy Sketch',
    description: 'A sketch of the human foot.',
    note: 'Study the proportions of the foot.' + mockNotes,
    lastViewed: '2025-01-01T12:30:00Z',
    lastPracticed: '2025-01-01T12:30:00Z',
    createdAt: '2024-12-15T08:45:00Z',
    modifiedAt: '2025-01-10T10:20:00Z',
  },
  {
    id: 12,
    boardId: [1],
    tags: [0, 1],
    url: '/assets/images/image3.jpg',
    isFavourite: true,
    title: 'Anatomy Sketch',
    description: 'A sketch of the human face.',
    note: 'Study the proportions of the face.' + mockNotes,
    lastViewed: '2025-01-01T12:30:00Z',
    lastPracticed: '2025-01-01T12:30:00Z',
    createdAt: '2024-12-15T08:45:00Z',
    modifiedAt: '2025-01-10T10:20:00Z',
  },
]

export const mockTags: ApiUserTag[] = [
  { id: 0, name: 'Anatomy' },
  { id: 1, name: 'Sketch' },
  { id: 2, name: 'Landscape' },
  { id: 3, name: 'Botanical' },
  { id: 4, name: 'Abstract' },
  { id: 5, name: 'Urban' },
  { id: 6, name: 'Still Life' },
  { id: 7, name: 'Human Figure' },
]

export const mockTagsMap: TagsMap = mockTags.reduce((acc, tag: ApiUserTag) => {
  acc[tag.id] = tag.name
  return acc
}, {} as TagsMap)

export const mockUser: ApiUser = {
  id: 1,
  nickname: 'John Doe',
  username: 'username_johndoe',
  email: 'johndoe@gmail.com',
  tags: mockTags,
  boards: mockBoards.filter((board) => board.userId === 1).map((board) => ({ id: board.id, name: board.title })),
  preferredLanguage: 'en',
  preferredTheme: 'dark',
  createdAt: '2024-12-15T08:45:00Z',
  modifiedAt: '2025-01-10T10:20:00Z',
}

export const mockUsers: ApiUser[] = [mockUser, { ...mockUser, id: 2 }]
