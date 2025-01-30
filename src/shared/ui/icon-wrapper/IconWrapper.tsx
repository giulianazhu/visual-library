import style from './styles.module.scss'
import { Flex } from 'antd'
import classNames from 'classnames'

interface IconWrapperProps extends React.PropsWithChildren {
  onClick?: () => void
  gap?: 'none' | 'small' | 'medium' | 'large'
}

function IconWrapper({ children, onClick, gap = 'small' }: IconWrapperProps) {
  return (
    <Flex
      className={classNames(style['icon-wrapper'], {
        small: gap === 'small',
        medium: gap === 'medium',
        large: gap === 'large',
      })}
      onClick={onClick ? onClick : undefined}
    >
      {children}
    </Flex>
  )
}

export default IconWrapper
