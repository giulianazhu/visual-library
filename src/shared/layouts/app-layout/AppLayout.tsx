import { Layout } from 'antd'
import { Outlet } from 'react-router'
import style from './styles.module.scss'
import classNames from 'classnames'
import Header from '../header'

export interface AppLayoutProps {}

function AppLayout() {
  return (
    <Layout className={classNames(style['app-layout'])}>
      <Header />
      <div className="outlet-container">
        <Outlet />
      </div>
    </Layout>
  )
}

export default AppLayout
