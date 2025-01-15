import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ImageListItem from './ImageListItem'


describe.skip('ImageListItem Component', () => {

  it('renders correctly', () => {
    render(<ImageListItem prop="string" />)
    const el = screen.getByText('')
     expect(el).toBeInTheDocument()
  })

   it('handles user interaction', async () => {
    const handleEvent = vi.fn()
    render(<ImageListItem prop="string" />)

  // const handleEvent = vi.fn()
  // render(<ImageListItem prop="string" />)

   // await userEvent.click(screen.getByText('Click Me'))
   // expect(handleEvent).toHaveBeenCalledTimes(1)
  })
})
