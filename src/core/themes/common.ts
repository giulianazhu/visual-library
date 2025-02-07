import type { ThemeConfig } from 'antd/es/config-provider'

const colors = {
  primary: '#9290C3',
  contrast: '#ffd480',
  bgHover: '#ffd480',
}

const fontSize = {
  general: 13,
  input: 13,
}

export const commonThemeColors = colors

export const commonTheme: ThemeConfig = {
  token: {
    fontFamily: 'Montserrat, sans-serif',
    colorPrimary: colors.primary,
    colorLinkHover: colors.primary,
    colorLinkActive: colors.primary,
    colorError: colors.primary,
    fontSize: fontSize.general,
    lineHeightHeading1: 1.5,
    fontWeightStrong: 500,
    borderRadius: 8,
    borderRadiusLG: 8,
    borderRadiusSM: 8,
    borderRadiusXS: 8,

    controlHeight: 40,
    controlHeightLG: 48,
  },
  components: {
    Layout: {
      bodyBg: 'transparent',
    },
    Menu: {
      // menu component has theme attribute that allow switching between item / darkitem based on current theme value
      // so i retrieved theme from useTheme and passed it to menu component and set all styles in common.ts instead of light/dark.ts
      fontSize: 15,
      itemSelectedColor: colors.primary,
      darkItemSelectedColor: colors.primary,
      itemColor: '#4E4E50',
      darkItemColor: '#F5F7F9',
      itemSelectedBg: 'transparent',
      darkItemSelectedBg: 'transparent',
      itemBg: '#f5f7f9',
      darkItemBg: '#343a40',
      itemHoverColor: colors.primary,
      darkItemHoverColor: colors.primary,
      itemHoverBg: '#ffffff',
      darkItemHoverBg: '#21252975',
      subMenuItemBg: '#f5f7f9',
      darkSubMenuItemBg: '#343a40',
      popupBg: '#f5f7f9',
      darkPopupBg: '#343a40',
    },
    Typography: {
      colorLinkActive: colors.primary,
    },
    Tabs: {
      colorPrimaryActive: colors.primary,
      itemSelectedColor: colors.primary,
    },
    Button: {
      colorPrimary: colors.primary,
      colorText: colors.primary,
      colorBgTextHover: 'rgba(245, 163, 44, 0.06)',
      colorBgTextActive: 'rgba(245, 163, 44, 0.15)',
      colorLink: colors.primary,
      colorLinkActive: colors.primary,
      colorTextLightSolid: 'rgba(0, 0, 0, 0.88)',
      controlHeight: 36,
      textHoverBg: 'transparent',
      fontSize: 13,
    },
    Input: {
      fontSize: fontSize.input,
      colorPrimary: colors.primary,
      lineWidth: 1.5,
      errorActiveShadow: `0 0 0 2px ${colors.primary}`,
      colorTextDisabled: 'grey',
      // input focus border color = activeBorderColor
    },
    Select: {
      colorPrimary: colors.primary,
      fontSize: fontSize.input,
    },
    Card: {
      colorBorderSecondary: 'transparent',
    },
    Radio: {
      fontSize: fontSize.input,
      colorBorder: 'transparent',
    },
    DatePicker: {
      colorPrimary: colors.primary,
      lineWidth: 1.5,
    },
    Checkbox: {
      controlInteractiveSize: 20,
      borderRadiusSM: 7,
      lineWidth: 1.5,
      fontSize: fontSize.input,
    },
    Table: {},
    Tag: {
      fontSize: 11,
      fontWeightStrong: 600,
      colorBorder: 'transparent',
      colorBorderBg: 'transparent',
    },
    Collapse: {
      fontSizeIcon: 15,
    },
    Badge: {
      colorBorderBg: 'transparent',
    },
    Notification: {
      colorError: colors.contrast,
      colorInfo: colors.primary,
    },
    Alert: {
      colorWarning: colors.contrast,
      colorWarningBg: 'rgba(255, 213, 128, 0.2)',
    },
  },
}
