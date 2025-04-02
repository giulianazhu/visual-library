import { EditPenIcon } from 'shared/icons'
import FormDrawer, { FormDrawerProps } from './FormDrawer'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import { TestId } from 'types/enums'

const formDrawerProps: FormDrawerProps = {
  setOpen: vi.fn().mockImplementation((bool: boolean) => (formDrawerProps.open = bool)),
  open: true,
  title: 'test title',
  customDrawerButton: <EditPenIcon />,
}

describe('FormDrawer', async () => {
  const { setOpen, open, title, customDrawerButton } = formDrawerProps
  it('calls setOpen when clicking drawer button', async () => {
    render(<FormDrawer setOpen={setOpen} open={open} title={title} customDrawerButton={customDrawerButton} />)
    expect(open).toEqual(true)
    const drawerHeader = screen.getByText(title!)
    expect(drawerHeader).toBeInTheDocument()
    expect(screen.queryByTestId(TestId.AddIcon)).not.toBeInTheDocument()
    expect(screen.getByTestId(TestId.EditPenIcon)).toBeInTheDocument()
  })

  it('renders the default button when customdrawer is not provided', async () => {
    const { setOpen, open, title } = formDrawerProps
    render(<FormDrawer setOpen={setOpen} open={open} title={title} />)
    expect(screen.queryByTestId(TestId.EditPenIcon)).not.toBeInTheDocument()
    expect(screen.getByTestId(TestId.AddIcon)).toBeInTheDocument()
  })
})
