// automatically include custom matchers provided by jest-dom for vitest
import '@testing-library/jest-dom/vitest'

global.matchMedia = vi.fn().mockImplementation((query) => ({
  matches: false,
  media: query,
  addListener: vi.fn(),
  removeListener: vi.fn(),
}))
