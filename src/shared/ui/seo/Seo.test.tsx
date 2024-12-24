import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Seo from './Seo'

describe.skip('Seo Component', () => {
  it('renders correctly', () => {
    render(<Seo pageLabel="string" />)
    const el = screen.getByText('Seo')
    expect(el).toBeInTheDocument()
  })

  it('handles user interaction', async () => {
    const handleEvent = vi.fn()
    render(<Seo pageLabel="string" />)

    await userEvent.click(screen.getByText('Click Me'))
    expect(handleEvent).toHaveBeenCalledTimes(1)
  })
})
