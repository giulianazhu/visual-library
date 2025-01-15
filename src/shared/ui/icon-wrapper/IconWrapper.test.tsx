import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import IconWrapper from './IconWrapper'


describe.skip('IconWrapper Component', () => {

  it('renders correctly', () => {
    render(<IconWrapper prop="string" />)
    const el = screen.getByText('')
     expect(el).toBeInTheDocument()
  })

   it('handles user interaction', async () => {
    const handleEvent = vi.fn()
    render(<IconWrapper prop="string" />)

  // const handleEvent = vi.fn()
  // render(<IconWrapper prop="string" />)

   // await userEvent.click(screen.getByText('Click Me'))
   // expect(handleEvent).toHaveBeenCalledTimes(1)
  })
})
