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
  image: {
    key: 'image',
    url: `/board/${RoutePath.Detail}/image/${RoutePath.SubDetail}`,
    private: true,
    menu: () => i18next.t('image.image'),
  },
  practice: {
    key: 'practice',
    url: `/practice`,
    private: true,
    menu: () => i18next.t('practice.practice'),
  },
  practiceStatus: {
    key: 'practiceStatus',
    url: `/practice/${RoutePath.Status}`,
    private: true,
    menu: () => i18next.t('practice.practice'),
  },
  user: {
    key: 'user',
    url: `/user/${RoutePath.Tab}`,
    private: true,
    menu: () => i18next.t('user.profile'),
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
