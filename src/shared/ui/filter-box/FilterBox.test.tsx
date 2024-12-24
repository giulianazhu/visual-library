import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FilterBox from './FilterBox'

describe.skip('FilterBox Component', () => {
  it('renders correctly', () => {
    // render(<FilterBox />)
    // const el = screen.getByText(FilterBox)
    // expect(el).toBeInTheDocument()
  })

  it('handles user interaction', async () => {
    const handleEvent = vi.fn()
    // render(<FilterBox />)

    await userEvent.click(screen.getByText('Click Me'))
    expect(handleEvent).toHaveBeenCalledTimes(1)
  })
})
