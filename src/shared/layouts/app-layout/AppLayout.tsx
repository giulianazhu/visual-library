import { Avatar, Button, Flex, Layout, Space, Switch, Typography } from 'antd'
import { Outlet } from 'react-router'
import style from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import routes from '@configs/routes'
import RouteLink from 'shared/ui/route-link'
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
              <RouteLink route={routes.dashboard}>
                <Button type="link"> {t('dashboard.dashboard')} </Button>
              </RouteLink>
              <RouteLink route={routes.practice}>
                <Button type="link">{t('practice.practice')}</Button>
              </RouteLink>
            </Flex>
          </Flex>
          <Flex align="center" gap="large">
            <ThemeSwitcher />
            <Avatar icon={<UserIcon />} />
          </Flex>
        </Flex>
      </Layout.Header>
      <div className="p-30">
        <Outlet />
      </div>
    </Layout>
  )
}

export default AppLayout
