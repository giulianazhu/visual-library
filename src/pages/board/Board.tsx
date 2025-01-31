import { Breadcrumb, Divider } from 'antd'
import useLoad from 'features/board/hooks/useLoad'
import SearchDelete from 'features/image/controllers/search-delete'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router'
import { HomeIcon } from 'shared/icons'
import IconWrapper from 'shared/ui/icon-wrapper'

import Seo from 'shared/ui/seo'

function Board() {
  const id = parseInt(useParams().id!)
  const { isPending, data: board } = useLoad(id)
  const { t } = useTranslation()
  const navigate = useNavigate()
  const title = isPending ? t('general.loading') : board?.title

  const breadCrumb = [
    {
      title: (
        <IconWrapper gap="medium" cursor="pointer" onClick={() => navigate('/dashboard')}>
          <HomeIcon />
          {t('dashboard.dashboard')}
        </IconWrapper>
      ),
    },
    { title: title },
  ]
  return (
    <Seo pageLabel="image" pageTitle={title}>
      <div className="page">
        <Breadcrumb items={breadCrumb} />
        <Divider className="pt-10" />
        <SearchDelete />
      </div>
    </Seo>
  )
}

export default Board
