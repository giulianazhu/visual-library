import { theme } from 'antd'
import type { ThemeConfig } from 'antd/es/config-provider'
import { commonThemeColors } from './common'

const colors = {
  text: '#F5F7F9',
  linkHover: '#ffd480',
  bgPrimary: '#212529',
  bgSecondary: '#2b303a',
  bgTertiary: '#262a327d',
  inputBorder: 'rgba(255,255,255, 0.12)',
}
export const darkThemeColors = colors

export const darkTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorTextHeading: colors.text,
    colorText: colors.text,
    colorTextBase: colors.text,
    colorIcon: colors.text,
    colorLink: colors.text,
    colorBorder: colors.text,
  },
  components: {
    Layout: {
      headerBg: colors.bgSecondary,
      bodyBg: '#212529',
      siderBg: colors.bgSecondary,
      footerBg: '#212529',
    },
    Button: {
      colorText: colors.text,
      colorBorderSecondary: colors.text,
      colorBorder: colors.text,
      colorBgContainer: '#212529',
      colorTextLightSolid: '#212529',
      colorLinkHover: colors.linkHover,
    },
    Input: {
      colorBorder: 'rgba(255,255,255, 0.12)',
      colorBgContainer: '#212529',
      colorTextPlaceholder: 'rgba(255,255,255, 0.4)',
      hoverBorderColor: commonThemeColors.primary,
      activeBorderColor: commonThemeColors.primary,
    },
    InputNumber: {
      colorBorder: 'rgba(255,255,255, 0.12)',
      colorBgContainer: '#212529',
      colorTextPlaceholder: 'rgba(255,255,255, 0.4)',
      hoverBorderColor: commonThemeColors.primary,
      activeBorderColor: commonThemeColors.primary,
    },
    Select: {
      colorBorder: 'rgba(255,255,255, 0.12)',
      colorBgContainer: '#212529',
      colorBgElevated: 'rgb(20, 18, 18)',
      controlItemBgActive: '#69491E',
      colorTextPlaceholder: 'rgba(255,255,255, 0.4)',
      hoverBorderColor: commonThemeColors.primary,
      activeBorderColor: commonThemeColors.primary,
    },
    Popover: {
      colorBgElevated: 'rgb(20, 18, 18)',
    },
    Dropdown: {
      colorBgElevated: 'rgb(20, 18, 18)',
    },
    Tabs: {
      colorPrimary: '#F5A32C',
      colorSplit: 'rgba(25, 22, 22, 0.7)',
    },
    Card: {
      colorBgContainer: colors.bgTertiary,
    },
    Radio: {
      colorPrimary: '#F5A32C',
      colorBgContainer: 'rgba(255, 255, 255, 0.08)',
    },
    DatePicker: {
      colorBorder: 'rgba(255,255,255, 0.12)',
      colorBgContainer: '#212529',
      colorBgElevated: 'rgb(20, 18, 18)',
      colorTextPlaceholder: 'rgba(255,255,255, 0.4)',
    },
    Checkbox: {
      colorBorder: 'rgba(255,255,255, 0.12)',
      colorText: 'rgba(255, 255, 255, 0.64)',
      colorBgContainer: 'rgb(35, 31, 32)',
    },
    Table: {
      colorBorderSecondary: 'rgba(255,255,255, 0.08)',
      colorBgContainer: '#212529',
      colorFillAlter: '#343a40',
    },
    Pagination: {
      colorBgContainer: colors.bgPrimary,
    },
  },
}
