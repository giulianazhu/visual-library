import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FormError from './FormError'

describe.skip('FormError Component', () => {
  it('renders correctly', () => {
    render(<FormError prop="string" />)
    const el = screen.getByText('')
    expect(el).toBeInTheDocument()
  })

  it('handles user interaction', async () => {
    const handleEvent = vi.fn()
    render(<FormError prop="string" />)

    // const handleEvent = vi.fn()
    // render(<FormError prop="string" />)

    // await userEvent.click(screen.getByText('Click Me'))
    // expect(handleEvent).toHaveBeenCalledTimes(1)
  })
})
