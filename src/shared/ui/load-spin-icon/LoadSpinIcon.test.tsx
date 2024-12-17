import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoadSpinIcon from './LoadSpinIcon'


describe('LoadSpinIcon Component', () => {

  it('renders correctly', () => {
    render(<LoadSpinIcon />)
    const el = screen.getByText('')
    expect(el).toBeInTheDocument()
  })

  // it('handles user interaction', async () => {

  // const handleEvent = vi.fn()
  // render(<LoadSpinIcon />)

   // await userEvent.click(screen.getByText('Click Me'))
   // expect(handleEvent).toHaveBeenCalledTimes(1)
  })
})
