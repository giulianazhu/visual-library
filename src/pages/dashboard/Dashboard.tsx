import { Card, Flex } from 'antd'
import { useEffect } from 'react'
import { useSeoContext } from 'core/providers/seo'
import routes from '@configs/routes'
import Searcher from 'shared/ui/searcher'
import { useTranslation } from 'react-i18next'

function Dashboard() {
  const { t } = useTranslation()
  const { setTitle } = useSeoContext()

  useEffect(() => {
    setTitle(routes.dashboard.menu())
  }, [setTitle])

  return (
    <>
      <Flex align="center" justify="center">
        <div className="w-ab-700">
          <Searcher placeholder={t('placeholder.searchBoard')} />
        </div>
      </Flex>
      <Flex gap="small" wrap={true} className="py-30">
        <Card className="h-ab-300 w-ab-200"></Card>
        <Card className="h-ab-300 w-ab-200"></Card>
        <Card className="h-ab-300 w-ab-200"></Card>
      </Flex>
    </>
  )
}

export default Dashboard
