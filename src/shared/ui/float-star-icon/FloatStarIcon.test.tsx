import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FloatStarIcon from './FloatStarIcon'


describe.skip('FloatStarIcon Component', () => {

  it('renders correctly', () => {
    render(<FloatStarIcon prop="string" />)
    const el = screen.getByText('')
     expect(el).toBeInTheDocument()
  })

   it('handles user interaction', async () => {
    const handleEvent = vi.fn()
    render(<FloatStarIcon prop="string" />)

  // const handleEvent = vi.fn()
  // render(<FloatStarIcon prop="string" />)

   // await userEvent.click(screen.getByText('Click Me'))
   // expect(handleEvent).toHaveBeenCalledTimes(1)
  })
})
