import { notification } from 'antd'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

const useToast = () => {
  const { t } = useTranslation()
  const [api, contextHolder] = notification.useNotification()

  const toastRef = useRef({
    showSuccess: (msg?: string, desc?: string) => {
      api.success({
        message: msg || t('toast.success.msg'),
        description: desc || '',
      })
    },
    showError: (msg?: string, desc?: string) => {
      api.error({
        message: msg || t('toast.error.msg'),
        description: desc || '',
      })
    },
    showInfo: (msg?: string, desc?: string) => {
      api.info({
        message: msg || t('toast.info.msg'),
        description: desc || '',
      })
    },
    contextHolder,
  })

  return toastRef.current
}

export default useToast
