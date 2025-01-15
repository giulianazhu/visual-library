import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BoardListItem from './BoardListItem'


describe.skip('BoardListItem Component', () => {

  it('renders correctly', () => {
    render(<BoardListItem prop="string" />)
    const el = screen.getByText('')
     expect(el).toBeInTheDocument()
  })

   it('handles user interaction', async () => {
    const handleEvent = vi.fn()
    render(<BoardListItem prop="string" />)

  // const handleEvent = vi.fn()
  // render(<BoardListItem prop="string" />)

   // await userEvent.click(screen.getByText('Click Me'))
   // expect(handleEvent).toHaveBeenCalledTimes(1)
  })
})
