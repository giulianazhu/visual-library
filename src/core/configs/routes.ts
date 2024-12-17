import i18next from 'i18next'
import { RoutePath } from 'types/enums'
import { Routes } from 'types/global'

export const routes = {
  login: {
    key: 'login',
    url: '/login',
    private: false,
    menu: () => i18next.t('user.login'),
  },
  signup: {
    key: 'signup',
    url: '/signup',
    private: false,
    menu: () => i18next.t('user.signup'),
  },
  dashboard: {
    key: 'dashboard',
    url: `/dashboard`,
    private: true,
    menu: () => i18next.t('dashboard.dashboard'),
  },
  board: {
    key: 'board',
    url: `/board/${RoutePath.Detail}`,
    private: true,
    menu: () => i18next.t('board.board'),
  },
  vision: {
    key: 'vision',
    url: `/board/${RoutePath.Detail}/vision/${RoutePath.SubDetail}`,
    private: true,
    menu: () => i18next.t('vision.vision'),
  },
  newVision: {
    key: 'vision-new',
    url: `/vision/${RoutePath.New}`,
    private: true,
    menu: () => i18next.t('vision.new'),
  },
  settings: {
    key: 'settings',
    url: `/settings/${RoutePath.Tab}`,
    private: true,
    menu: () => i18next.t('settings.settings'),
  },
  help: {
    key: 'help',
    url: '/help',
    private: true,
    menu: () => i18next.t('help.help'),
  },
} as const satisfies Routes

export default routes
