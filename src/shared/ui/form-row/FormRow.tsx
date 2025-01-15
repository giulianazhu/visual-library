import { useTranslation } from 'react-i18next'
import style from './styles.module.scss'
import { Flex } from 'antd'
import classNames from 'classnames'

interface FormRowProps extends React.PropsWithChildren {
  height?: number
}

function FormRow({ children, height }: FormRowProps) {
  return (
    <Flex
      flex={`1 1 ${height ? `${height}px` : 'auto'}`}
      vertical
      gap="small"
      className={classNames('mb-15', { [`h-ab-${height}`]: height !== undefined })}
    >
      {children}
    </Flex>
  )
}

export default FormRow
