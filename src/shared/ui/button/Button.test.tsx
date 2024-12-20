import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

// describe = context of related tests
describe('Button Component', () => {
  // it = test case, similar to test() just diff naming convention
  it('renders the button with the correct label', () => {
    render(<Button label="Click Me" onClick={() => {}} />)
    // screen ==> queries the rendered DOM
    const el = screen.getByText('Click Me')
    expect(el).toBeInTheDocument()
  })

  it('calls the onClick handler when clicked', async () => {
    // function mocking
    const handleClick = vi.fn()
    render(<Button label="Click Me" onClick={handleClick} />)
    // user event simulation
    await userEvent.click(screen.getByText('Click Me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
