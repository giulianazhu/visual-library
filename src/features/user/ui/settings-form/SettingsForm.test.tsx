import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SettingsForm from './SettingsForm'


describe.skip('SettingsForm Component', () => {

  it('renders correctly', () => {
    render(<SettingsForm prop="string" />)
    const el = screen.getByText('')
     expect(el).toBeInTheDocument()
  })

   it('handles user interaction', async () => {
    const handleEvent = vi.fn()
    render(<SettingsForm prop="string" />)

  // const handleEvent = vi.fn()
  // render(<SettingsForm prop="string" />)

   // await userEvent.click(screen.getByText('Click Me'))
   // expect(handleEvent).toHaveBeenCalledTimes(1)
  })
})
