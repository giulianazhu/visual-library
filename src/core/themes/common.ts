import type { ThemeConfig } from 'antd/es/config-provider'

const color = {
  primary: '#eb832e',
}

export const commonTheme: ThemeConfig = {
  token: {
    fontFamily: 'Montserrat, sans-serif',
    colorPrimary: '#eb832e',
    colorLinkHover: '#eb832e',
    colorLinkActive: '#eb832e',
    colorError: '#eb832e',
    fontSize: 13,
    fontSizeHeading1: 40,
    lineHeightHeading1: 1.5,
    fontSizeHeading2: 32,
    fontSizeHeading3: 24,
    fontSizeHeading5: 16,

    fontWeightStrong: 500,
    borderRadius: 4,
    borderRadiusLG: 4,
    borderRadiusSM: 4,
    borderRadiusXS: 4,

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
      itemSelectedColor: '#eb832e',
      darkItemSelectedColor: '#eb832e',
      itemColor: '#4E4E50',
      darkItemColor: '#F5F7F9',
      itemSelectedBg: 'transparent',
      darkItemSelectedBg: 'transparent',
      itemBg: '#f5f7f9',
      darkItemBg: '#343a40',
      itemHoverColor: color.primary,
      darkItemHoverColor: color.primary,
      itemHoverBg: '#ffffff',
      darkItemHoverBg: '#21252975',
      subMenuItemBg: '#f5f7f9',
      darkSubMenuItemBg: '#343a40',
      popupBg: '#f5f7f9',
      darkPopupBg: '#343a40',
    },
    Typography: {
      colorLinkActive: '#eb832e',
    },
    Tabs: {
      colorPrimaryActive: '#eb832e',
      itemSelectedColor: '#eb832e',
    },
    Button: {
      colorPrimary: '#eb832e',
      colorText: '#eb832e',
      colorBgTextHover: 'rgba(245, 163, 44, 0.06)',
      colorBgTextActive: 'rgba(245, 163, 44, 0.15)',
      colorLink: '#eb832e',
      colorLinkHover: '#ffd480',
      colorLinkActive: '#eb832e',
      colorTextLightSolid: 'rgba(0, 0, 0, 0.88)',
      controlHeight: 36,
      textHoverBg: 'transparent',
    },
    Input: {
      colorPrimary: '#eb832e',
      lineWidth: 1.5,
      errorActiveShadow: '0 0 0 2px #eb832e',
      colorTextDisabled: 'grey',
      fontWeightStrong: 600,
    },
    Select: {
      colorPrimary: '#eb832e',
    },
    Card: {
      colorBorderSecondary: 'transparent',
      padding: 16,
    },
    Radio: {
      fontSizeSM: 12,
      borderRadiusSM: 7,
      borderRadius: 11.2,
      borderRadiusLG: 14,
      borderRadiusXS: 4,
      colorTextLightSolid: 'rgba(0, 0, 0, 0.88)',
      colorBorder: 'transparent',
    },
    Drawer: {},
    DatePicker: {
      colorPrimary: '#eb832e',
      lineWidth: 1.5,
    },
    Checkbox: {
      controlInteractiveSize: 20,
      borderRadiusSM: 7,
      lineWidth: 1.5,
    },
    Table: {},
    Tag: {
      defaultBg: color.primary,
      fontSize: 11,
      fontWeightStrong: 600,
    },
    Collapse: {
      fontSizeIcon: 15,
    },
    Badge: {
      colorBorderBg: 'transparent',
    },
  },
}
