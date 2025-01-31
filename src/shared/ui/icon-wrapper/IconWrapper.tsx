import style from './styles.module.scss'
import { Flex } from 'antd'
import classNames from 'classnames'

interface IconWrapperProps extends React.PropsWithChildren {
  onClick?: () => void
  gap?: 'none' | 'small' | 'medium' | 'large'
  cursor?: 'pointer' | 'default'
}

function IconWrapper({ children, onClick, gap = 'small', cursor }: IconWrapperProps) {
  return (
    <Flex
      className={classNames(style['icon-wrapper'], {
        small: gap === 'small',
        medium: gap === 'medium',
        large: gap === 'large',
        pointer: cursor === 'pointer',
      })}
      onClick={onClick ? onClick : undefined}
    >
      {children}
    </Flex>
  )
}

export default IconWrapper
