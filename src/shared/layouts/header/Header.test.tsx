import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from './Header'

describe.skip('Header Component', () => {
  it('renders correctly', () => {
    render(<Header />)
    const el = screen.getByText('Header')
    expect(el).toBeInTheDocument()
  })

  it('handles user interaction', async () => {
    const handleEvent = vi.fn()
    render(<Header />)

    await userEvent.click(screen.getByText('Click Me'))
    expect(handleEvent).toHaveBeenCalledTimes(1)
  })
})
