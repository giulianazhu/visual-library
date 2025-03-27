import { useSearchBoard } from 'features/board/store/search'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import FilterBox, { FilterBoxProps } from './FilterBox'
import { TestId } from 'types/enums'
import { mockTags, mockUser } from 'shared/utils/mockData'
import { SearchStore } from 'types/store/common'

vi.mock('features/app/store/user', () => ({
  default: vi.fn().mockReturnValue({
    user: {
      tags: [
        { id: 0, name: 'Anatomy' },
        { id: 1, name: 'Sketch' },
        { id: 2, name: 'Landscape' },
        { id: 3, name: 'Botanical' },
        { id: 4, name: 'Abstract' },
        { id: 5, name: 'Urban' },
        { id: 6, name: 'Still Life' },
        { id: 7, name: 'Human Figure' },
      ],
    }, // Provide the mock data you need for your tests
    setUser: vi.fn(),
  }),
}))

// Mock Zustand store

const mockSetFilters = vi.fn()
const mockSetOpen = vi.fn()
const mockSetResetFilters = vi.fn()

const filterBoxProps: FilterBoxProps<SearchStore> = {
  setOpen: mockSetOpen,
  useSearchContext: useSearchBoard,
}

describe('FilterBox', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    mockSetFilters.mockReset()
    mockSetOpen.mockReset()
    mockSetResetFilters.mockReset()
  })

  it('renders FilterBox and displays tags, sort options, and slider', () => {
    render(<FilterBox {...filterBoxProps} />)

    // Check if tag options are rendered
    // expect(screen.getByText(mockTags[0].name)).toBeInTheDocument()

    // Check if the SortBy options are rendered
    expect(screen.getByText('general.sortBy.activeFirst')).toBeInTheDocument()
    expect(screen.getByText('general.sortBy.activeLast')).toBeInTheDocument()

    // Check if the slider is rendered
    expect(screen.getByText('search.showResults')).toBeVisible()
  })

  // it('changes the selected tag when clicked', async () => {
  //   render(<FilterBox {...filterBoxProps} />)

  //   // Simulate checking Tag1
  //   const tag1 = screen.getByText('Tag1')
  //   await userEvent.click(tag1)

  //   // Check if tag1 is selected
  //   expect(tag1).toHaveClass('ant-tag-checkable-tag-checked')

  //   // Simulate unchecking Tag1
  //   await userEvent.click(tag1)

  //   // Check if tag1 is unselected
  //   expect(tag1).not.toHaveClass('ant-tag-checkable-tag-checked')
  // })

  // it('applies the filters when clicking apply', async () => {
  //   render(<FilterBox {...filterBoxProps} />)

  //   // Select a tag and change sort option
  //   const tag1 = screen.getByText('Tag1')
  //   await userEvent.click(tag1)

  //   const sortByActiveFirst = screen.getByText('general.sortBy.activeFirst')
  //   await userEvent.click(sortByActiveFirst)

  //   // Simulate applying filters
  //   const applyButton = screen.getByText('search.applyFilters')
  //   await userEvent.click(applyButton)

  //   // Check if setFilters was called with the correct parameters
  //   expect(mockSetFilters).toHaveBeenCalledWith({
  //     tags: [1],
  //     sortBy: SortBy.ActiveFirst,
  //     limit: 10, // filterBox limit
  //   })

  //   // Check if setOpen was called to close the filter box
  //   expect(mockSetOpen).toHaveBeenCalledWith(false)
  // })

  // it('resets the tags when clicking reset button', async () => {
  //   render(<FilterBox {...filterBoxProps} />)

  //   // Check and uncheck a tag
  //   const tag1 = screen.getByText('Tag1')
  //   await userEvent.click(tag1)
  //   expect(tag1).toHaveClass('ant-tag-checkable-tag-checked')

  //   // Click reset button
  //   const resetButton = screen.getByText('search.reset')
  //   await userEvent.click(resetButton)

  //   // Ensure the tags are reset
  //   expect(tag1).not.toHaveClass('ant-tag-checkable-tag-checked')
  // })

  // it('calls setResetFilters when reset all button is clicked', async () => {
  //   render(<FilterBox {...filterBoxProps} />)

  //   // Click reset all button
  //   const resetAllButton = screen.getByText('search.resetAll')
  //   await userEvent.click(resetAllButton)

  //   // Ensure setResetFilters was called
  //   expect(mockSetResetFilters).toHaveBeenCalled()
  // })
})
