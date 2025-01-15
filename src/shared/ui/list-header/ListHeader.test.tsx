import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DeleteChecker from './ListHeader'

describe.skip('DeleteChecker Component', () => {
  it('renders correctly', () => {
    render(<DeleteChecker prop="string" />)
    const el = screen.getByText('')
    expect(el).toBeInTheDocument()
  })

  it('handles user interaction', async () => {
    const handleEvent = vi.fn()
    render(<DeleteChecker prop="string" />)

    // const handleEvent = vi.fn()
    // render(<DeleteChecker prop="string" />)

    // await userEvent.click(screen.getByText('Click Me'))
    // expect(handleEvent).toHaveBeenCalledTimes(1)
  })
})
