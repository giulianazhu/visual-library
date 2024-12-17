import { theme } from 'antd'
import type { ThemeConfig } from 'antd/es/config-provider'
import { darkThemeColors } from './dark'
import { color } from './common'

// 9AA6B2,BCCCDC
const borderColor = '#ced4da'

const bgColor = {
  primary: '#F8FAFC',
  secondary: '#D9EAFD',
}

const textColor = {
  info: '#000000d9;',
}

export const lightTheme: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorTextHeading: '#4E4E50',
    colorText: '#4E4E50',
    colorTextBase: '#4E4E50',
    colorIcon: '#4E4E50',
    colorLink: '#4E4E50',
  },
  components: {
    Layout: {
      headerBg: bgColor.secondary,
      bodyBg: bgColor.primary,
      siderBg: bgColor.secondary,
      footerBg: bgColor.primary,
    },
    Tabs: {
      colorPrimary: '#F5A32C',
      colorSplit: 'rgba(0, 0, 0, 0.12)',
    },
    Button: {
      colorText: '#343A40',
      colorBgContainer: '#ffffff',
      colorTextLightSolid: '#ffffff',
      defaultBorderColor: borderColor,
      colorLinkHover: '#4a80f5',
      colorBgSolidHover: 'red',
    },
    Radio: {
      colorBgContainer: 'rgba(0, 0, 0, 0.08)',
      colorText: textColor.info,
    },
    Input: {
      colorBorder: 'rgba(0,0,0, 0.12)',
      colorBgContainer: '#ffffff',
      colorTextPlaceholder: 'rgba(0,0,0, 0.4)',
      colorText: textColor.info,
    },
    InputNumber: {
      colorBorder: 'rgba(0,0,0, 0.12)',
      colorBgContainer: '#ffffff',
      colorTextPlaceholder: 'rgba(0,0,0, 0.4)',
      colorText: textColor.info,
    },
    Select: {
      colorBorder: 'rgba(0,0,0, 0.12)',
      colorBgContainer: '#ffffff',
      controlItemBgActive: '#FCDEB3',
      colorTextPlaceholder: 'rgba(0,0,0, 0.4)',
      colorText: textColor.info,
    },
    DatePicker: {
      colorBorder: 'rgba(0,0,0, 0.12)',
      colorBgContainer: '#ffffff',
      colorTextPlaceholder: 'rgba(0,0,0, 0.4)',
      colorText: textColor.info,
    },
    Checkbox: {
      colorBorder: 'rgba(0,0,0, 0.12)',
      colorBgContainer: '#ffffff',
      colorText: textColor.info,
    },
    Table: {
      colorBorderSecondary: 'rgba(0,0,0, 0.08)',
      colorBgContainer: '#ffffff',
      colorFillAlter: 'rgb(242,242,242)',
    },
    Pagination: {
      colorBgContainer: bgColor.primary,
    },
    Tag: {
      defaultColor: bgColor.primary,
      colorBorder: bgColor.primary,
    },
    Switch: {
      colorPrimary: color.primary,
    },
  },
}
