import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FormLabel from './FormLabel'

describe.skip('FormLabel Component', () => {
  it('renders correctly', () => {
    render(<FormLabel prop="string" />)
    const el = screen.getByText('')
    expect(el).toBeInTheDocument()
  })

  it('handles user interaction', async () => {
    const handleEvent = vi.fn()
    render(<FormLabel />)

    // const handleEvent = vi.fn()
    // render(<FormLabel prop="string" />)

    // await userEvent.click(screen.getByText('Click Me'))
    // expect(handleEvent).toHaveBeenCalledTimes(1)
  })
})
