import { Avatar, Button, Flex, Layout, Typography } from 'antd'
import { NavLink } from 'react-router'
import style from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import routes from 'core/configs/routes'
import ThemeSwitcher from 'shared/ui/theme-switcher'
import { UserIcon } from 'shared/icons'
import { PracticeStatus, RoutePath } from 'types/enums'

function Header() {
  const { t } = useTranslation()

  return (
    <Layout.Header className={style['header']}>
      <Flex justify="space-between" align="center" className="h-100">
        <Flex align="center">
          <Typography.Title className="app-title">
            <Flex align="center" gap="small">
              {t('app.title')}
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
          <ThemeSwitcher />
          <Avatar icon={<UserIcon />} />
        </Flex>
      </Flex>
    </Layout.Header>
  )
}

export default Header
