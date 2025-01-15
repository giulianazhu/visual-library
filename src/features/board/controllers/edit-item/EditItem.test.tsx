import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import EditItem from './EditItem'

describe.skip('Controller API Integration', () => {
  it('should call API and render data correctly', async () => {
    const mockData = { id: 1, name: 'Test Item' }
    const mockFn = vi.spyOn(global, 'fetch').mockResolvedValueOnce(new Response(JSON.stringify(mockData)))

    render(<EditItem prop="string" />)

    expect(screen.getByText(/loading/i)).toBeInTheDocument()

    await waitFor(() => expect(screen.getByText(mockData.name)).toBeInTheDocument())

    mockFn.mockRestore()
  })

  it('handles user interaction and trigger state changes', async () => {
    const user = userEvent.setup()
    render(<EditItem />)

    const input = screen.getByPlaceholderText(/enter value/i) // Replace placeholder with actual text
    await user.type(input, 'New Value')
    expect(input).toHaveValue('New Value')

    const button = screen.getByRole('button', { name: /submit/i }) // Replace with actual button name
    await user.click(button)

    expect(screen.getByText(/success/i)).toBeInTheDocument() // Replace with actual success message
  })
})
