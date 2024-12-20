import { render, screen } from '@testing-library/react'
import RouteLink from './RouteLink'

describe.skip('RouteLink Component', () => {
  it('renders correctly', () => {
    render(<RouteLink />)
    const el = screen.getByText('')
    expect(el).toBeInTheDocument()
  })
})
