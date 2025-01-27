import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import Create from './Create'

// Mocking the useCreate hook correctly
vi.mock('features/board/hooks/useCreate', { spy: true })

// Mocking the useToast hook
vi.mock('shared/hooks/useToast', () => ({
  useToast: vi.fn().mockReturnValue({
    showSuccess: vi.fn(),
    showError: vi.fn(),
    contextHolder: <div>Toast</div>,
  }),
}))

describe('Create Component', () => {
  it('should call API and render data correctly', async () => {
    const mockData = { id: 1, name: 'Test Item' }
    const mockFn = vi.spyOn(global, 'fetch').mockResolvedValueOnce(new Response(JSON.stringify(mockData)))

    render(<Create setIsCreate={vi.fn()} />)

    expect(screen.getByText(/loading/i)).toBeInTheDocument()

    // Wait for the mock data to appear
    await waitFor(() => expect(screen.getByText(mockData.name)).toBeInTheDocument())

    mockFn.mockRestore()
  })

  it('handles user interaction and triggers state changes', async () => {
    const user = userEvent.setup()

    // Mock useCreate to simulate successful mutation
    vi.mocked(useCreate).mockReturnValue({
      isPending: false,
      mutateAsync: vi.fn().mockResolvedValueOnce({}),
    })

    render(<Create setIsCreate={vi.fn()} />)

    const input = screen.getByPlaceholderText(/enter value/i) // Adjust this placeholder as needed
    await user.type(input, 'New Value')

    expect(input).toHaveValue('New Value')

    const submitButton = screen.getByRole('button', { name: /submit/i }) // Adjust button text as needed
    await user.click(submitButton)

    // Verify success message is displayed
    expect(screen.getByText(/success/i)).toBeInTheDocument()
  })

  it('shows error when mutation fails', async () => {
    const user = userEvent.setup()

    // Mock useCreate to simulate error in mutation
    vi.mocked(useCreate).mockReturnValue({
      isPending: false,
      mutateAsync: vi.fn().mockRejectedValueOnce(new Error('Mutation failed')),
    })

    render(<Create setIsCreate={vi.fn()} />)

    const input = screen.getByPlaceholderText(/enter value/i) // Adjust this placeholder as needed
    await user.type(input, 'New Value')

    const submitButton = screen.getByRole('button', { name: /submit/i }) // Adjust button text as needed
    await user.click(submitButton)

    // Verify error handling was triggered
    expect(screen.getByText(/error/i)).toBeInTheDocument() // Adjust for actual error text
  })
})
