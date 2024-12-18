import { theme } from 'antd'
import type { ThemeConfig } from 'antd/es/config-provider'

const colors = {
  text: '#F5F7F9',
  linkHover: '#ffd480',
  bgPrimary: '#070F2B',
  bgSecondary: '#2b303a',
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
    },
    Input: {
      colorBorder: 'rgba(255,255,255, 0.12)',
      colorBgContainer: '#212529',
      colorTextPlaceholder: 'rgba(255,255,255, 0.4)',
    },
    InputNumber: {
      colorBorder: 'rgba(255,255,255, 0.12)',
      colorBgContainer: '#212529',
      colorTextPlaceholder: 'rgba(255,255,255, 0.4)',
    },
    Select: {
      colorBorder: 'rgba(255,255,255, 0.12)',
      colorBgContainer: '#212529',
      colorBgElevated: 'rgb(20, 18, 18)',
      controlItemBgActive: '#69491E',
      colorTextPlaceholder: 'rgba(255,255,255, 0.4)',
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
      // colorBgContainer: '#191616',
      colorBgContainer: colors.bgSecondary,
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
    Tag: {
      defaultColor: colors.bgPrimary,
      colorBorder: colors.bgPrimary,
    },
    Drawer: {
      // colorBgContainer: colors.bgSecondary,
      // colorBgBase: colors.bgSecondary,
      // colorPrimary: colors.bgSecondary,
      // colorBgLayout: colors.bgSecondary,
      // color,
      // colorBorderSecondary: colors.bgSecondary,
      // colorFillAlter: '#343a40',
      // colorBgBase: '#343a40',
      // colorBgContainer: '#343a40',
      // colorFillContent: '#343a40',
      // colorBgLayout: '#343a40',
      // colorBorderBg: '#343a40',
      // colorBgBlur: '#343a40',
      // colorBorder: '#343a40',
      // colorBgSolid: '#343a40',
      // colorBorderSecondary: '#343a40',
      // colorBgSpotlight: '#343a40',
      // colorInfoBg: '#343a40',
      // colorPrimaryBg: '#343a40',
      // colorPrimary: '#343a40',
    },
  },
}
