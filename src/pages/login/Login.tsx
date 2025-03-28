import { Flex, Layout, Typography } from 'antd'
import LoginUser from 'features/app/controllers/login-user'
import style from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import ThemeSwitcher from 'shared/ui/theme-switcher'

function Login() {
  const { t } = useTranslation()
  return (
    <Layout className={style['login-page']}>
      <Layout.Content>
        <div className="switcher">
          <ThemeSwitcher />
        </div>
        <Flex vertical align="center" justify="center" className="h-100 py-20">
          <Typography.Title level={2}>{t('app.welcome')}</Typography.Title>
          <Typography.Text className="pb-40">{t('app.desc')}</Typography.Text>
          <LoginUser />
        </Flex>
      </Layout.Content>
    </Layout>
  )
}

export default Login
