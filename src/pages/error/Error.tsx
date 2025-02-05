import { Button, Flex, Typography } from 'antd'
import style from './styles.module.scss'
import { FallbackProps } from 'react-error-boundary'
import { useTranslation } from 'react-i18next'

function Error({ error, resetErrorBoundary }: FallbackProps) {
  const { t } = useTranslation()
  return (
    <div className={style['error']}>
      <Flex vertical align="center" gap="large">
        <Flex vertical align="center">
          <Typography.Title>{t('error.title')}</Typography.Title>
          <Typography.Text>{t('error.desc')}</Typography.Text>
          <Typography.Text>[{error.message}]</Typography.Text>
        </Flex>
        <Button onClick={resetErrorBoundary}>Try Again</Button>
      </Flex>
    </div>
  )
}

export default Error
