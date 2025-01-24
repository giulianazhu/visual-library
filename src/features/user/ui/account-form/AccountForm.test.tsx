import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AccountForm from './AccountForm'


describe.skip('AccountForm Component', () => {

  it('renders correctly', () => {
    render(<AccountForm prop="string" />)
    const el = screen.getByText('')
     expect(el).toBeInTheDocument()
  })

   it('handles user interaction', async () => {
    const handleEvent = vi.fn()
    render(<AccountForm prop="string" />)

  // const handleEvent = vi.fn()
  // render(<AccountForm prop="string" />)

   // await userEvent.click(screen.getByText('Click Me'))
   // expect(handleEvent).toHaveBeenCalledTimes(1)
  })
})
