import { render, screen } from '@testing-library/react'
import EditButton, { EditButtonProps } from './EditButton'
import userEvent from '@testing-library/user-event'
import { TestId } from 'types/enums'

const editButtonProps: EditButtonProps = {
  onClick: vi.fn(),
}

describe('Edit Button Component', () => {
  const { onClick } = editButtonProps
  it('calls the onClick handler when clicked', async () => {
    render(<EditButton onClick={onClick} />)
    await userEvent.click(screen.getByTestId(TestId.EditPenIcon))
    expect(onClick).toHaveBeenCalledOnce()
  })
})
