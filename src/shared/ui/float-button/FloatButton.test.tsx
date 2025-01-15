import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FloatButton from './FloatButton'


describe.skip('FloatButton Component', () => {

  it('renders correctly', () => {
    render(<FloatButton prop="string" />)
    const el = screen.getByText('')
     expect(el).toBeInTheDocument()
  })

   it('handles user interaction', async () => {
    const handleEvent = vi.fn()
    render(<FloatButton prop="string" />)

  // const handleEvent = vi.fn()
  // render(<FloatButton prop="string" />)

   // await userEvent.click(screen.getByText('Click Me'))
   // expect(handleEvent).toHaveBeenCalledTimes(1)
  })
})
