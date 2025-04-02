import { useSearchBoard } from 'features/board/store/search'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FilterBox, { FilterBoxProps } from './FilterBox'
import { mockTags, mockUser } from 'shared/utils/mockData'
import { SearchStore } from 'types/store/common'
import useUserStore from 'features/app/store/user'

vi.mock('features/app/store/user', () => ({
  default: vi.fn(),
  useUserStore: vi.fn(),
}))

const mockSetOpen = vi.fn().mockImplementation((boolean: boolean) => boolean)

const filterBoxProps: FilterBoxProps<SearchStore> = {
  setOpen: mockSetOpen,
  useSearchContext: useSearchBoard,
}

describe('FilterBox', () => {
  beforeEach(() => {
    vi.mocked(useUserStore).mockReturnValue(mockUser)
    mockSetOpen.mockReset()
  })

  it('renders FilterBox and displays tags, sort options, and slider', () => {
    render(<FilterBox {...filterBoxProps} />)

    expect(screen.getByText(mockTags[0].name)).toBeInTheDocument()

    expect(screen.getByText('general.sortBy.activeFirst')).toBeInTheDocument()
    expect(screen.getByText('general.sortBy.activeLast')).toBeInTheDocument()

    expect(screen.getByText('search.showResults')).toBeVisible()
  })

  it('clicking tag allow selecting and deselecting it', async () => {
    render(<FilterBox {...filterBoxProps} />)
    //renders all user tags + reset tag
    const tags = document.querySelectorAll('.ant-tag')
    expect(tags.length).toEqual(mockTags.length + 1)

    //check tag
    const tag1 = screen.getByText(mockTags[0].name)
    await userEvent.click(tag1)
    expect(tag1).toHaveClass('ant-tag-checkable-checked')

    //check new tag and uncheck checked tag
    const tag2 = screen.getByText(mockTags[1].name)
    await userEvent.click(tag2)
    expect(tag2).toHaveClass('ant-tag-checkable-checked')
    await userEvent.click(tag1)
    expect(tag1).not.toHaveClass('ant-tag-checkable-checked')

    //reset checked tags
    const resetButton = screen.getByText('search.reset')
    await userEvent.click(resetButton)
    const tagButtons = document.querySelectorAll('.ant-tag-checkable-checked')
    expect(tagButtons.length).toEqual(0)
  })

  it('resets all filters', async () => {
    render(<FilterBox {...filterBoxProps} />)

    //check tag
    const tag1 = screen.getByText(mockTags[0].name)
    await userEvent.click(tag1)
    expect(tag1).toHaveClass('ant-tag-checkable-checked')

    //check sortbylast
    const sortByLast = screen.getByText('general.sortBy.activeLast')
    await userEvent.click(sortByLast)

    //coz of ant design reasons, the asserting method is a lil bit peculiar
    const sortByLastLabel = document.querySelector('label.ant-radio-button-wrapper-checked')
    const checkedButton = document.querySelector('.ant-radio-button-checked')
    expect(sortByLastLabel).toContain(sortByLast)
    expect(sortByLastLabel).toContain(checkedButton)

    //reset all filters
    const resetAllfilters = screen.getByText('search.resetAll')
    await userEvent.click(resetAllfilters)
    expect(tag1).not.toHaveClass('ant-tag-checkable-checked')
    expect(sortByLast).not.toHaveClass('ant-radio-button-wrapper-checked')
  })

  it('close the filterbox after applying filters', async () => {
    render(<FilterBox {...filterBoxProps} />)
    await userEvent.click(screen.getByText('search.applyFilters'))
    expect(mockSetOpen).toHaveBeenCalledOnce()
    expect(mockSetOpen).toHaveBeenCalledWith(false)
  })
})
