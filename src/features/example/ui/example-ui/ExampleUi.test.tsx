import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ExampleUi from './ExampleUi'

describe.skip('Eample ui test', () => {
  it('renders correctly', () => {
    render(<ExampleUi prop="string" />)
    const el = screen.getByText('')
    expect(el).toBeInTheDocument()
  })

  it('handles user interaction', async () => {
    const handleEvent = vi.fn()
    render(<ExampleUi prop="string" />)

    await userEvent.click(screen.getByText('Click Me'))
    expect(handleEvent).toHaveBeenCalledTimes(1)
  })
})
