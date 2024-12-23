import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BoardsList from './BoardsList'


describe.skip('BoardsList Component', () => {

  it('renders correctly', () => {
    render(<BoardsList />)
    const el = screen.getByText(BoardsList)
    expect(el).toBeInTheDocument()
  })

   it('handles user interaction', async () => {
    const handleEvent = vi.fn()
    render(<BoardsList />)

    await userEvent.click(screen.getByText('Click Me'))
    expect(handleEvent).toHaveBeenCalledTimes(1)
  })
})
