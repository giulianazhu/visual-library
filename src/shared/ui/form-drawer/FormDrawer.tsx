import { useTranslation } from 'react-i18next'
import { Button, Drawer, Flex } from 'antd'
import IconWrapper from '../icon-wrapper/IconWrapper'
import { AddIcon } from 'shared/icons'
import { useEffect, useState } from 'react'
import style from './styles.module.scss'

export interface FormDrawerProps extends React.PropsWithChildren {
  open: boolean
  setOpen: (open: boolean) => void
  title?: string
  customDrawerButton?: React.ReactNode
}

function FormDrawer({ open, setOpen, title, customDrawerButton, children }: FormDrawerProps) {
  const { t } = useTranslation()
  const [placement, setPlacement] = useState<'bottom' | 'right'>('right')

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 575px)')

    const handleDrawerPlacement = (e: MediaQueryList) => {
      if (e.matches) {
        setPlacement('bottom') // Screen width <= 575px
      } else {
        setPlacement('right') // Screen width > 575px
      }
    }
    mediaQuery.onchange = () => handleDrawerPlacement(mediaQuery)
    handleDrawerPlacement(mediaQuery)
    return () => {
      mediaQuery.onchange = null
    }
  }, [])

  return (
    <>
      {/* can replace with custom button to trigger drawer */}
      {customDrawerButton ? (
        customDrawerButton
      ) : (
        <Flex justify="end">
          <Button type="primary" onClick={() => setOpen(true)}>
            <IconWrapper>
              <AddIcon />
              {t('action.createNew')}
            </IconWrapper>
          </Button>
        </Flex>
      )}
      <Drawer
        title={<div className={style['form-title']}>{title || t('action.create')}</div>}
        onClose={() => setOpen(false)}
        open={open}
        width={500}
        placement={placement}
        height="100%"
      >
        {children}
      </Drawer>
    </>
  )
}

export default FormDrawer
