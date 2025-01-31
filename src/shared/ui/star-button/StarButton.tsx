import useToast from 'shared/hooks/useToast'
import style from './styles.module.scss'
import { StarEmptyIcon, StarFullIcon } from 'shared/icons'
import { useTranslation } from 'react-i18next'

interface StarButtonProps {
  active: boolean
  onClick: () => void
}

function StarButton({ active, onClick }: StarButtonProps) {
  const { t } = useTranslation()
  const { showInfo, contextHolder } = useToast()
  return (
    <>
      {contextHolder}
      <span
        className={style['star-button']}
        role="button"
        onClick={() => {
          onClick()
          showInfo(t('general.mockUnavailable'))
        }}
      >
        {active ? <StarFullIcon className="star-icon" /> : <StarEmptyIcon className="star-icon" />}
      </span>
    </>
  )
}

export default StarButton
