import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FormInput from './FormInput'

describe.skip('FormInput Component', () => {
  it('renders correctly', () => {
    render(<FormInput prop="string" />)
    const el = screen.getByText('')
    expect(el).toBeInTheDocument()
  })

  it('handles user interaction', async () => {
    const handleEvent = vi.fn()
    render(<FormInput />)

    // const handleEvent = vi.fn()
    // render(<FormInput prop="string" />)

    // await userEvent.click(screen.getByText('Click Me'))
    // expect(handleEvent).toHaveBeenCalledTimes(1)
  })
})
