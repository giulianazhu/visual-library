import { MdModeEdit } from 'react-icons/md'
import { TestId } from 'types/enums'
import { IoCloseOutline, IoEyeOutline } from 'react-icons/io5'
import { IconBaseProps } from 'react-icons'
import { LoadingOutlined } from '@ant-design/icons'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { PiNotePencil } from 'react-icons/pi'
import { HiOutlineDocumentDownload, HiOutlinePlus } from 'react-icons/hi'
import { LuLogOut } from 'react-icons/lu'

export interface CustomIconProps extends IconBaseProps {
  size?: string | number
  color?: string
}

export interface CustomAntIconProps extends React.ComponentProps<typeof LoadingOutlined> {
  //for "typeof" any random ant icon would do
  size?: number
}

export const CustomEyeIcon = ({ size, color }: CustomIconProps) => {
  return <IoEyeOutline size={size} color={color} data-testid={TestId.InfoIcon} />
}

export const CustomEditPenIcon = ({ size, color }: CustomIconProps) => {
  return <MdModeEdit size={size} color={color} data-testid={TestId.EditPenIcon} />
}

export const CustomEditNoteIcon = ({ size, color }: CustomIconProps) => {
  return <PiNotePencil size={size} color={color} data-testid={TestId.EditNoteIcon} />
}

export const CustomDeleteIcon = ({ size, color }: CustomIconProps) => {
  return <RiDeleteBin7Fill size={size} color={color} data-testid={TestId.DeleteIcon} />
}

export const CustomLoaderIcon = ({ size = 14 }: CustomAntIconProps) => {
  return <LoadingOutlined spin style={{ fontSize: size + 'px' }} data-testid={TestId.LoadIcon} />
}

export const CustomAddIcon = ({ size, color }: CustomIconProps) => {
  return <HiOutlinePlus size={size} color={color} data-testid={TestId.AddIcon} />
}

export const CustomExportIcon = ({ size, color }: CustomIconProps) => {
  return <HiOutlineDocumentDownload size={size} color={color} data-testid={TestId.ExportIcon} />
}

export const CustomCloseIcon = ({ size, color }: CustomIconProps) => {
  return <IoCloseOutline size={size} color={color} data-testid={TestId.CloseIcon} />
}

export const CustomLogoutIcon = ({ size, color }: CustomIconProps) => {
  return <LuLogOut size={size} color={color} data-testid={TestId.LogoutIcon} />
}
