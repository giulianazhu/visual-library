import { notification } from 'antd'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

const useToast = () => {
  const { t } = useTranslation()
  const [api, contextHolder] = notification.useNotification()

  const toastRef = useRef({
    showSuccess: (msg?: string, desc?: string) => {
      api.success({
        message: msg || t('notification.success.msg'),
        description: desc || '',
      })
    },
    showError: (msg?: string, desc?: string) => {
      api.error({
        message: msg || t('notification.error.msg'),
        description: desc || '',
      })
    },
    contextHolder,
  })

  return toastRef.current
}

export default useToast
