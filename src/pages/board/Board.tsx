import { Breadcrumb, Divider, Skeleton } from 'antd'
import useLoad from 'features/board/hooks/useLoad'
import SearchDelete from 'features/image/controllers/search-delete'
import { t } from 'i18next'
import { useParams } from 'react-router'
import { HomeIcon } from 'shared/icons'
import IconWrapper from 'shared/ui/icon-wrapper'

import Seo from 'shared/ui/seo'

function Board() {
  const id = parseInt(useParams().id!)
  const { isPending, data: board } = useLoad(id)

  const breadCrumb = [
    {
      title: (
        <IconWrapper gap="medium">
          <HomeIcon />
          {t('dashboard.dashboard')}
        </IconWrapper>
      ),
    },
    { title: board?.title },
  ]
  return (
    <Seo pageLabel="image" pageTitle="board title">
      <div className="page">
        {isPending ? (
          <Skeleton active />
        ) : (
          <>
            <Breadcrumb items={breadCrumb} />
            <Divider className="pt-10" />
            <SearchDelete />
          </>
        )}
      </div>
    </Seo>
  )
}

export default Board
