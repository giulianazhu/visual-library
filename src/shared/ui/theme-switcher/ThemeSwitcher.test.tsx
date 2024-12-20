import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ThemeSwitcher from './ThemeSwitcher'

describe.skip('ThemeSwitcher Component', () => {
  it('renders correctly', () => {
    render(<ThemeSwitcher />)
    const el = screen.getByText('')
    expect(el).toBeInTheDocument()
  })

  it('handles user interaction', async () => {
    const handleEvent = vi.fn()
    render(<ThemeSwitcher />)

    await userEvent.click(screen.getByText('Click Me'))
    expect(handleEvent).toHaveBeenCalledTimes(1)
  })
})
