import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FormCard from './FormCard'


describe.skip('FormCard Component', () => {

  it('renders correctly', () => {
    render(<FormCard prop="string" />)
    const el = screen.getByText('')
     expect(el).toBeInTheDocument()
  })

   it('handles user interaction', async () => {
    const handleEvent = vi.fn()
    render(<FormCard prop="string" />)

  // const handleEvent = vi.fn()
  // render(<FormCard prop="string" />)

   // await userEvent.click(screen.getByText('Click Me'))
   // expect(handleEvent).toHaveBeenCalledTimes(1)
  })
})
