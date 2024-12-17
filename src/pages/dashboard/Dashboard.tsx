import { Button, Card, Flex } from 'antd'
import style from './styles.module.scss'
import { useThemeContext } from 'core/providers/theme'
import { Theme } from '@app-types/enums'
import { useEffect } from 'react'
import { useSeoContext } from 'core/providers/seo'
import routes from '@configs/routes'
import Searcher from 'shared/ui/searcher'
import { useTranslation } from 'react-i18next'

function Dashboard() {
  const { t } = useTranslation()
  const { theme, setTheme } = useThemeContext()
  const { setTitle } = useSeoContext()

  useEffect(() => {
    setTitle(routes.dashboard.menu())
  }, [setTitle])

  return (
    <>
      <Searcher placeholder={t('placeholder.searchBoard')} />
      <div className={style['dashboard']}>Dashboard</div>
      <Button type="primary" onClick={() => setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark)}>
        Hello
      </Button>
      <Flex gap="small" className="py-30">
        <Card className="h-ab-300 w-ab-200"></Card>
        <Card className="h-ab-300 w-ab-200"></Card>
        <Card className="h-ab-300 w-ab-200"></Card>
      </Flex>
    </>
  )
}

export default Dashboard
