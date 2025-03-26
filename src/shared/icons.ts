import {
  IoEyeOutline,
  IoInformationCircle,
  IoMoonOutline,
  IoDocumentOutline,
  IoCloseOutline,
  IoLanguage,
} from 'react-icons/io5'
import {
  IoIosSearch,
  IoIosStats,
  IoIosArrowDropleftCircle,
  IoIosSunny,
  IoIosMoon,
  IoIosArrowRoundBack,
  IoMdExit,
} from 'react-icons/io'
import {
  FaArrowLeft,
  FaArrowRight,
  FaFacebookSquare,
  FaHome,
  FaInstagramSquare,
  FaLinkedin,
  FaRegCopy,
  FaRegStar,
  FaStar,
  FaUser,
} from 'react-icons/fa'
import { RiDeleteBin7Fill, RiContactsBookLine, RiDashboard2Line, RiErrorWarningLine } from 'react-icons/ri'
import { SlSettings } from 'react-icons/sl'
import { HiOutlinePlus, HiOutlineDocumentReport } from 'react-icons/hi'
import { TbFileExport, TbFilterSearch, TbListDetails, TbWorld } from 'react-icons/tb'
import { PiNotePencil } from 'react-icons/pi'
import {
  MdLockOutline,
  MdLogout,
  MdModeEdit,
  MdOutlineConstruction,
  MdOutlineEmail,
  MdOutlinePhone,
} from 'react-icons/md'
import { AiOutlineCopyright, AiOutlineHistory, AiOutlineShop } from 'react-icons/ai'
import { LuCircleHelp, LuClock } from 'react-icons/lu'
import { BiExport } from 'react-icons/bi'
import { GrStatusGood } from 'react-icons/gr'
import { BsBell } from 'react-icons/bs'
import { RxDoubleArrowUp, RxHamburgerMenu } from 'react-icons/rx'
import LoadSpinIcon from './ui/load-spin-icon'
import { CiPause1, CiPlay1 } from 'react-icons/ci'
import {
  CustomAddIcon,
  CustomDeleteIcon,
  CustomEditNoteIcon,
  CustomEditPenIcon,
  CustomExportIcon,
  CustomEyeIcon,
  CustomLogoutIcon,
  CustomLoaderIcon,
} from 'shared/ui/custom-icons/CustomIcons'

const icons = {
  // actions
  LoadIcon: CustomLoaderIcon,
  AddIcon: CustomAddIcon,
  EyeIcon: CustomEyeIcon,
  SearchIcon: IoIosSearch,
  EditPenIcon: CustomEditPenIcon,
  EditNoteIcon: CustomEditNoteIcon,
  ExportIcon: CustomExportIcon,
  DeleteIcon: CustomDeleteIcon,
  CopyIcon: FaRegCopy,
  FileExportIcon: TbFileExport,
  SettingIcon: SlSettings,
  LogoutIcon: CustomLogoutIcon,

  //   direction
  ArrowCircleIcon: IoIosArrowDropleftCircle,
  ArrowIcon: IoIosArrowRoundBack,
  DoubleArrowIcon: RxDoubleArrowUp,

  //practice
  PlayIcon: CiPlay1,
  LeftArrowIcon: FaArrowLeft,
  RightArrowIcon: FaArrowRight,
  PauseIcon: CiPause1,
  ExitIcon: IoMdExit,

  //   menu
  HomeIcon: FaHome,
  UserIcon: FaUser,
  MenuIcon: RxHamburgerMenu,
  CloseIcon: IoCloseOutline,
  DashboardIcon: RiDashboard2Line,
  ConstructIcon: MdOutlineConstruction,
  LanguageIcon: TbWorld,
  TranslationIcon: IoLanguage,
  HelpIcon: LuCircleHelp,

  //   general info
  InfoIcon: IoInformationCircle,
  ContactsIcon: RiContactsBookLine,
  CreateDateIcon: LuClock,
  LockIcon: MdLockOutline,
  HistoryIcon: AiOutlineHistory,
  DocumentIcon: IoDocumentOutline,
  EmailIcon: MdOutlineEmail,
  PhoneIcon: MdOutlinePhone,
  DescIcon: TbListDetails,

  ShopIcon: AiOutlineShop, //dealers

  //   status related
  StatusIcon: GrStatusGood,
  StatsIcon: IoIosStats,
  DocumentReportIcon: HiOutlineDocumentReport,

  //social media icons
  FacebookIcon: FaFacebookSquare,
  InstagramIcon: FaInstagramSquare,
  LinkedInIcon: FaLinkedin,

  // headers stuff
  SunIcon: IoIosSunny,
  MoonIcon: IoMoonOutline,
  MoonFillIcon: IoIosMoon,
  AlertIcon: BsBell,

  //   etc.
  CopyrightIcon: AiOutlineCopyright,
  FilterIcon: TbFilterSearch,
  WarningIcon: RiErrorWarningLine,
  StarEmptyIcon: FaRegStar,
  StarFullIcon: FaStar,
}
// Export the icons object, and also allow individual named exports if needed
export { icons }

// Exporting individual icons
export const {
  AddIcon,
  EyeIcon,
  SearchIcon,
  EditPenIcon,
  EditNoteIcon,
  ExportIcon,
  DeleteIcon,
  CopyIcon,
  FileExportIcon,
  ArrowCircleIcon,
  DashboardIcon,
  InfoIcon,
  ContactsIcon,
  CreateDateIcon,
  ConstructIcon,

  ShopIcon,

  StatsIcon,
  DocumentReportIcon,
  StatusIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  CopyrightIcon,

  SunIcon,
  MoonIcon,
  MoonFillIcon,
  AlertIcon,
  LockIcon,
  HistoryIcon,
  DocumentIcon,
  EmailIcon,
  PhoneIcon,
  DescIcon,
  LoadIcon,
  MenuIcon,
  CloseIcon,
  ArrowIcon,
  SettingIcon,
  LanguageIcon,
  TranslationIcon,
  UserIcon,
  FilterIcon,
  WarningIcon,
  StarEmptyIcon,
  StarFullIcon,
  PlayIcon,
  PauseIcon,
  LeftArrowIcon,
  RightArrowIcon,
  ExitIcon,
  DoubleArrowIcon,
  HelpIcon,
  HomeIcon,
  LogoutIcon,
} = icons
