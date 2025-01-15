import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PracticeShuffler from './PracticeShuffler'


describe.skip('PracticeShuffler Component', () => {

  it('renders correctly', () => {
    render(<PracticeShuffler prop="string" />)
    const el = screen.getByText('')
     expect(el).toBeInTheDocument()
  })

   it('handles user interaction', async () => {
    const handleEvent = vi.fn()
    render(<PracticeShuffler prop="string" />)

  // const handleEvent = vi.fn()
  // render(<PracticeShuffler prop="string" />)

   // await userEvent.click(screen.getByText('Click Me'))
   // expect(handleEvent).toHaveBeenCalledTimes(1)
  })
})
