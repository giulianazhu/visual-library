import { theme } from 'antd'
import type { ThemeConfig } from 'antd/es/config-provider'
import { commonThemeColors } from './common'

const colors = {
  text: '#4E4E50',
  infoText: '#000000d9',
  linkHover: '#4a80f5',
  border: '#ced4da',
  inputBorder: 'rgba(0,0,0, 0.12)',
  bgPrimary: '#F8FAFC',
  bgSecondary: '#D9EAFD',
}
export const lightThemeColors = colors

export const lightTheme: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorTextHeading: colors.text,
    colorText: colors.text,
    colorTextBase: colors.text,
    colorIcon: colors.text,
    colorLink: colors.text,
  },
  components: {
    Layout: {
      headerBg: colors.bgSecondary,
      bodyBg: colors.bgPrimary,
      siderBg: colors.bgSecondary,
      footerBg: colors.bgPrimary,
    },
    Tabs: {
      colorPrimary: '#F5A32C',
      colorSplit: 'rgba(0, 0, 0, 0.12)',
    },
    Button: {
      colorText: '#343A40',
      colorBgContainer: '#ffffff',
      colorTextLightSolid: '#ffffff',
      defaultBorderColor: colors.border,
      colorLinkHover: colors.linkHover,
      colorBgSolidHover: 'red',
    },
    Radio: {
      colorBgContainer: 'rgba(0, 0, 0, 0.08)',
      colorText: colors.infoText,
    },
    Input: {
      colorBorder: 'rgba(0,0,0, 0.12)',
      colorBgContainer: '#ffffff',
      colorTextPlaceholder: 'rgba(0,0,0, 0.4)',
      colorText: colors.infoText,
    },
    InputNumber: {
      colorBorder: 'rgba(0,0,0, 0.12)',
      colorBgContainer: '#ffffff',
      colorTextPlaceholder: 'rgba(0,0,0, 0.4)',
      colorText: colors.infoText,
    },
    Select: {
      colorBorder: 'rgba(0,0,0, 0.12)',
      colorBgContainer: '#ffffff',
      controlItemBgActive: '#FCDEB3',
      colorTextPlaceholder: 'rgba(0,0,0, 0.4)',
      colorText: colors.infoText,
    },
    DatePicker: {
      colorBorder: 'rgba(0,0,0, 0.12)',
      colorBgContainer: '#ffffff',
      colorTextPlaceholder: 'rgba(0,0,0, 0.4)',
      colorText: colors.infoText,
    },
    Checkbox: {
      colorBorder: 'rgba(0,0,0, 0.12)',
      colorBgContainer: '#ffffff',
      colorText: colors.infoText,
    },
    Table: {
      colorBorderSecondary: 'rgba(0,0,0, 0.08)',
      colorBgContainer: '#ffffff',
      colorFillAlter: 'rgb(242,242,242)',
    },
    Pagination: {
      colorBgContainer: colors.bgPrimary,
    },
    Tag: {
      defaultColor: colors.bgPrimary,
      colorBorder: colors.bgPrimary,
    },
    Switch: {
      colorPrimary: commonThemeColors.primary,
    },
  },
}
