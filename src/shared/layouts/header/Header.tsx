import { Avatar, Button, Dropdown, Flex, Layout, MenuProps, Space, Typography } from 'antd'
import { NavLink, useNavigate } from 'react-router'
import style from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import routes from 'core/configs/routes'
import ThemeSwitcher from 'shared/ui/theme-switcher'
import { HelpIcon, LogoutIcon, SettingIcon, UserIcon } from 'shared/icons'
import { PracticeStatus, RoutePath, UserTab } from 'types/enums'
import LanguageSwitcher from 'features/app/ui/language-switcher'
import { clearUser } from 'core/helpers/authHelper'

function Header() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const accountItems: MenuProps['items'] = [
    {
      key: '1',
      label: <NavLink to={routes.user.url.replace(RoutePath.Tab, UserTab.Account)}>{t('user.account')}</NavLink>,
      icon: (
        <NavLink to={routes.user.url.replace(RoutePath.Tab, UserTab.Account)}>
          <UserIcon size={20} />
        </NavLink>
      ),
    },
    {
      key: '2',
      label: <NavLink to={routes.user.url.replace(RoutePath.Tab, UserTab.Settings)}>{t('settings.settings')}</NavLink>,
      icon: (
        <NavLink to={routes.user.url.replace(RoutePath.Tab, UserTab.Settings)}>
          <SettingIcon size={20} />
        </NavLink>
      ),
    },
    {
      key: '3',
      label: <NavLink to={routes.help.url}>{t('help.help')}</NavLink>,
      icon: (
        <NavLink to={routes.help.url}>
          <HelpIcon size={20} />
        </NavLink>
      ),
    },
    {
      key: '4',
      label: t('auth.logout'),
      icon: <LogoutIcon size={20} />,
      onClick: () => {
        clearUser()
        navigate(routes.login.url)
      },
    },
  ]

  return (
    <Layout.Header className={style['header']}>
      <Flex justify="space-between" align="center" className="h-100">
        <Flex align="center">
          <Typography.Title level={3} className="app-title">
            <Flex align="center" gap="small">
              <span className="fontSize-20">{t('app.title')}</span>
              <img src="/app-icon-md.png" alt="by Karyative - Flaticon" width="50" />
            </Flex>
          </Typography.Title>
          <Flex align="center">
            <NavLink to={routes.dashboard.url}>
              <Button type="link"> {t('dashboard.dashboard')} </Button>
            </NavLink>
            <NavLink to={routes.practiceStatus.url.replace(RoutePath.Status, PracticeStatus.Settings)}>
              <Button type="link">{t('practice.practice')}</Button>
            </NavLink>
          </Flex>
        </Flex>
        <Flex align="center" gap="large">
          <LanguageSwitcher />
          <ThemeSwitcher />
          <Dropdown menu={{ items: accountItems }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <Avatar icon={<UserIcon />} />
              </Space>
            </a>
          </Dropdown>
        </Flex>
      </Flex>
    </Layout.Header>
  )
}

export default Header
