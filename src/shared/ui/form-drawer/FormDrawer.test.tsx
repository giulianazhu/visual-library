import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FormDrawer from './FormDrawer'


describe.skip('FormDrawer Component', () => {

  it('renders correctly', () => {
    render(<FormDrawer prop="string" />)
    const el = screen.getByText('')
     expect(el).toBeInTheDocument()
  })

   it('handles user interaction', async () => {
    const handleEvent = vi.fn()
    render(<FormDrawer prop="string" />)

  // const handleEvent = vi.fn()
  // render(<FormDrawer prop="string" />)

   // await userEvent.click(screen.getByText('Click Me'))
   // expect(handleEvent).toHaveBeenCalledTimes(1)
  })
})
