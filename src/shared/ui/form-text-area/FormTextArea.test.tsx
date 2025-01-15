import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FormTextArea from './FormTextArea'


describe.skip('FormTextArea Component', () => {

  it('renders correctly', () => {
    render(<FormTextArea prop="string" />)
    const el = screen.getByText('')
     expect(el).toBeInTheDocument()
  })

   it('handles user interaction', async () => {
    const handleEvent = vi.fn()
    render(<FormTextArea prop="string" />)

  // const handleEvent = vi.fn()
  // render(<FormTextArea prop="string" />)

   // await userEvent.click(screen.getByText('Click Me'))
   // expect(handleEvent).toHaveBeenCalledTimes(1)
  })
})
