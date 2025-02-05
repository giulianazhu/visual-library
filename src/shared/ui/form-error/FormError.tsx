import { WarningIcon } from 'shared/icons'
import style from './styles.module.scss'
import React from 'react'
import IconWrapper from '../icon-wrapper'

function FormError({ children }: React.PropsWithChildren) {
  return (
    <span className={style['form-error']}>
      <IconWrapper>
        <WarningIcon size={18} />
        {children}
      </IconWrapper>
    </span>
  )
}

export default FormError
