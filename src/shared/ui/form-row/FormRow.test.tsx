import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FormRow from './FormRow'

describe.skip('FormRow Component', () => {
  it('renders correctly', () => {
    render(<FormRow prop="string" />)
    const el = screen.getByText('')
    expect(el).toBeInTheDocument()
  })

  it('handles user interaction', async () => {
    const handleEvent = vi.fn()
    render(<FormRow />)

    // const handleEvent = vi.fn()
    // render(<FormRow prop="string" />)

    // await userEvent.click(screen.getByText('Click Me'))
    // expect(handleEvent).toHaveBeenCalledTimes(1)
  })
})
