import style from './styles.module.scss'

function FormCard({ children }: React.PropsWithChildren) {
  return <div className={style['form-card']}>{children}</div>
}

export default FormCard
