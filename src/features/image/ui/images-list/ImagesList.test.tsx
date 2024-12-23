import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ImagesList from './ImagesList'


describe.skip('ImagesList Component', () => {

  it('renders correctly', () => {
    render(<ImagesList />)
    const el = screen.getByText(ImagesList)
    expect(el).toBeInTheDocument()
  })

   it('handles user interaction', async () => {
    const handleEvent = vi.fn()
    render(<ImagesList />)

    await userEvent.click(screen.getByText('Click Me'))
    expect(handleEvent).toHaveBeenCalledTimes(1)
  })
})
