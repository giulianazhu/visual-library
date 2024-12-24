import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Detail from './Detail'

describe.skip('Detail Component', () => {
  it('renders correctly', () => {
    render(<Detail image={{}} />)
    const el = screen.getByText('Detail')
    expect(el).toBeInTheDocument()
  })

  it('handles user interaction', async () => {
    const handleEvent = vi.fn()
    render(<Detail image={{}} />)

    await userEvent.click(screen.getByText('Click Me'))
    expect(handleEvent).toHaveBeenCalledTimes(1)
  })
})
