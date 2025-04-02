// automatically include custom matchers provided by jest-dom for vitest
import '@testing-library/jest-dom/vitest'
import { mockUser } from 'shared/utils/mockData'

global.matchMedia = vi.fn().mockImplementation((query) => ({
  matches: false,
  media: query,
  addListener: vi.fn(),
  removeListener: vi.fn(),
}))

globalThis.localStorage.setItem('user', JSON.stringify(mockUser))
