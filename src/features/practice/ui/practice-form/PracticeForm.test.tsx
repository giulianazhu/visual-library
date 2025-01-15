import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PracticeForm from './PracticeForm'


describe.skip('PracticeForm Component', () => {

  it('renders correctly', () => {
    render(<PracticeForm prop="string" />)
    const el = screen.getByText('')
     expect(el).toBeInTheDocument()
  })

   it('handles user interaction', async () => {
    const handleEvent = vi.fn()
    render(<PracticeForm prop="string" />)

  // const handleEvent = vi.fn()
  // render(<PracticeForm prop="string" />)

   // await userEvent.click(screen.getByText('Click Me'))
   // expect(handleEvent).toHaveBeenCalledTimes(1)
  })
})
