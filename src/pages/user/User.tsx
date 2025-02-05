import { useEffect } from 'react'
import type { TabsProps } from 'antd'
import { Tabs } from 'antd'
import { UserTab } from 'types/enums'
import IconWrapper from 'shared/ui/icon-wrapper'
import { SettingIcon, UserIcon } from 'shared/icons'
import { useTranslation } from 'react-i18next'
import Account from 'features/user/controllers/account'
import Settings from 'features/user/controllers/settings'
import Seo from 'shared/ui/seo'

function User() {
  const { t } = useTranslation()
  const loadUser = async () => {
    //load user
    return
  }

  const items: TabsProps['items'] = [
    {
      key: UserTab.Account,
      label: (
        <IconWrapper>
          <UserIcon /> {t('user.account')}
        </IconWrapper>
      ),
      children: <Account />,
    },
    {
      key: UserTab.Settings,
      label: (
        <IconWrapper>
          <SettingIcon /> {t('settings.settings')}
        </IconWrapper>
      ),
      children: <Settings />,
    },
  ]

  useEffect(() => {
    loadUser()
  }, [])

  return (
    <Seo pageLabel="user.user">
      <div className="page">
        <Tabs tabPosition="left" items={items} />
      </div>
    </Seo>
  )
}

export default User
