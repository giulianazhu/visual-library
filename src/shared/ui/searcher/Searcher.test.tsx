import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Searcher, { SearcherProps } from './Searcher'
import { SearchBoardStore, useSearchBoard } from 'features/board/store/search'

const searcherProps: SearcherProps<SearchBoardStore> = {
  placeholderLabel: 'search...',
  useSearchContext: useSearchBoard,
}

describe('Searcher Component', () => {
  const { placeholderLabel, useSearchContext } = searcherProps

  it('updates query value on submit', async () => {
    render(<Searcher placeholderLabel={placeholderLabel} useSearchContext={useSearchContext} />)

    const searcher = screen.getByRole('textbox')
    expect(searcher).toHaveValue('')

    await userEvent.click(searcher)
    await userEvent.type(searcher, 'testquery')
    await userEvent.type(searcher, '{enter}')
    expect(searcher).toHaveValue('testquery')
  })

  it('opens the filter box by clicking "advanced filters" button', async () => {
    render(<Searcher placeholderLabel={placeholderLabel} useSearchContext={useSearchContext} />)

    const filterBoxOpener = screen.getByText('search.advancedFilters')
    fireEvent.click(filterBoxOpener)
    expect(screen.getByText('search.applyFilters')).toBeVisible()
  })
})
