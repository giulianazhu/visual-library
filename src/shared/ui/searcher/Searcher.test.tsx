import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'


describe('Searcher Component', () => {

  it('renders correctly', () => {
    render(<Searcher />)
    const el = screen.getByText('')
    expect(el).toBeInTheDocument()
  })

  // it('handles user interaction', async () => {

  // const handleEvent = vi.fn()
  // render(<Searcher />)

   // await userEvent.click(screen.getByText('Click Me'))
   // expect(handleEvent).toHaveBeenCalledTimes(1)
  })
})
