import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FormSwitch from './FormSwitch'


describe.skip('FormSwitch Component', () => {

  it('renders correctly', () => {
    render(<FormSwitch prop="string" />)
    const el = screen.getByText('')
     expect(el).toBeInTheDocument()
  })

   it('handles user interaction', async () => {
    const handleEvent = vi.fn()
    render(<FormSwitch prop="string" />)

  // const handleEvent = vi.fn()
  // render(<FormSwitch prop="string" />)

   // await userEvent.click(screen.getByText('Click Me'))
   // expect(handleEvent).toHaveBeenCalledTimes(1)
  })
})
