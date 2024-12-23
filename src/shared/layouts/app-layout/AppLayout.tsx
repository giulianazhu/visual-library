import { Avatar, Button, Flex, Layout, Typography } from 'antd'
import { NavLink, Outlet } from 'react-router'
import style from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import routes from 'core/configs/routes'
import ThemeSwitcher from 'shared/ui/theme-switcher'
import { UserIcon } from 'shared/icons'
import classNames from 'classnames'

export interface AppLayoutProps {}

function AppLayout() {
  const { t } = useTranslation()
  return (
    <Layout className={classNames(style['app-layout'])}>
      <Layout.Header className="px-30">
        <Flex justify="space-between" align="center ">
          <Flex align="center">
            <Typography.Title>
              <Flex align="center" gap="small">
                {t('app.title')}
                <img src="/app-icon-md.png" alt="by Karyative - Flaticon" width="50" />
              </Flex>
            </Typography.Title>
            <Flex align="center">
              <NavLink to={routes.dashboard.url}>
                <Button type="link"> {t('dashboard.dashboard')} </Button>
              </NavLink>
              <NavLink to={routes.practice.url}>
                <Button type="link">{t('practice.practice')}</Button>
              </NavLink>
            </Flex>
          </Flex>
          <Flex align="center" gap="large">
            <ThemeSwitcher />
            <Avatar icon={<UserIcon />} />
          </Flex>
        </Flex>
      </Layout.Header>
      <div className="p-30 px-50">
        <Outlet />
      </div>
    </Layout>
  )
}

export default AppLayout
