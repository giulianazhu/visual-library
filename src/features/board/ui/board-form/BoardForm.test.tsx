import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BoardForm from './BoardForm'


describe.skip('BoardForm Component', () => {

  it('renders correctly', () => {
    render(<BoardForm prop="string" />)
    const el = screen.getByText('')
     expect(el).toBeInTheDocument()
  })

   it('handles user interaction', async () => {
    const handleEvent = vi.fn()
    render(<BoardForm prop="string" />)

  // const handleEvent = vi.fn()
  // render(<BoardForm prop="string" />)

   // await userEvent.click(screen.getByText('Click Me'))
   // expect(handleEvent).toHaveBeenCalledTimes(1)
  })
})
