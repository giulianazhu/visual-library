import Seo from 'shared/ui/seo'
import SearchDelete from 'features/board/controllers/search-delete'
import { Breadcrumb, Divider } from 'antd'
import IconWrapper from 'shared/ui/icon-wrapper'
import { HomeIcon } from 'shared/icons'
import { useTranslation } from 'react-i18next'

function Dashboard() {
  const { t } = useTranslation()

  const breadCrumb = [
    {
      title: (
        <IconWrapper gap="medium">
          <HomeIcon />
          {t('dashboard.dashboard')}
        </IconWrapper>
      ),
    },
  ]

  return (
    <Seo pageLabel="dashboard.dashboard">
      <div className="page">
        <Breadcrumb items={breadCrumb} />
        <Divider className="pt-10" />
        <SearchDelete />
      </div>
    </Seo>
  )
}

export default Dashboard
