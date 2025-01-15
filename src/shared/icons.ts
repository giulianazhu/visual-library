import {
  IoEyeOutline,
  IoCarOutline,
  IoInformationCircle,
  IoMoonOutline,
  IoDocumentOutline,
  IoCloseOutline,
  IoLanguage,
  IoVolumeHighOutline,
  IoVolumeLowOutline,
  IoVolumeMediumOutline,
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
  FaInstagramSquare,
  FaLinkedin,
  FaRegCopy,
  FaRegStar,
  FaStar,
  FaUser,
} from 'react-icons/fa'
import {
  RiDeleteBin7Fill,
  RiContactsBookLine,
  RiContractLine,
  RiDashboard2Line,
  RiShieldUserLine,
  RiErrorWarningLine,
} from 'react-icons/ri'
import { SlSettings } from 'react-icons/sl'
import { HiOutlinePlus, HiOutlineDocumentReport, HiOutlineTruck } from 'react-icons/hi'
import { TbCurrencyEuro, TbFileExport, TbFilterSearch, TbListDetails, TbWorld } from 'react-icons/tb'
import { PiBuildingOffice, PiNotePencil } from 'react-icons/pi'
import { GiReceiveMoney } from 'react-icons/gi'
import { MdLockOutline, MdModeEdit, MdOutlineConstruction, MdOutlineEmail, MdOutlinePhone } from 'react-icons/md'
import { AiOutlineCopyright, AiOutlineEuro, AiOutlineHistory, AiOutlineShop } from 'react-icons/ai'
import { LuClock } from 'react-icons/lu'
import { BiBuildingHouse, BiExport } from 'react-icons/bi'
import { GrStatusGood } from 'react-icons/gr'
import { BsBell } from 'react-icons/bs'
import { RxHamburgerMenu } from 'react-icons/rx'
import LoadSpinIcon from './ui/load-spin-icon'
import { CiPause1, CiPlay1 } from 'react-icons/ci'

const icons = {
  LoadIcon: LoadSpinIcon,
  AddIcon: HiOutlinePlus,
  EyeIcon: IoEyeOutline,
  SearchIcon: IoIosSearch,
  EditPenIcon: MdModeEdit,
  EditNoteIcon: PiNotePencil,
  ExportIcon: BiExport,
  DeleteIcon: RiDeleteBin7Fill,
  CopyIcon: FaRegCopy,
  FileExportIcon: TbFileExport,
  SettingIcon: SlSettings,

  //   direction
  ArrowCircleIcon: IoIosArrowDropleftCircle,
  ArrowIcon: IoIosArrowRoundBack,

  //practice
  PlayIcon: CiPlay1,
  LeftArrowIcon: FaArrowLeft,
  RightArrowIcon: FaArrowRight,
  PauseIcon: CiPause1,
  ExitIcon: IoMdExit,

  //   menu
  UserIcon: FaUser,
  MenuIcon: RxHamburgerMenu,
  CloseIcon: IoCloseOutline,
  DashboardIcon: RiDashboard2Line,
  ConstructIcon: MdOutlineConstruction,
  LanguageIcon: TbWorld,
  TranslationIcon: IoLanguage,

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
} = icons
