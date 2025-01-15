import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ImageForm from './ImageForm'

describe.skip('ImageForm Component', () => {
  it('renders correctly', () => {
    render(<ImageForm prop="string" />)
    const el = screen.getByText('')
    expect(el).toBeInTheDocument()
  })

  it('handles user interaction', async () => {
    const handleEvent = vi.fn()
    render(<ImageForm />)
    // const handleEvent = vi.fn()
    // render(<ImageForm prop="string" />)

    // await userEvent.click(screen.getByText('Click Me'))
    // expect(handleEvent).toHaveBeenCalledTimes(1)
  })
})
