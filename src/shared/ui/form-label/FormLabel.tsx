import style from './styles.module.scss'
import classNames from 'classnames'

interface FormLabelProps {
  htmlFor: string
  children: string
  required?: boolean
}

function FormLabel({ htmlFor, children, required }: FormLabelProps) {
  return (
    <label htmlFor={htmlFor} className={classNames(style['form-label'], { required })}>
      {children}
    </label>
  )
}

export default FormLabel
