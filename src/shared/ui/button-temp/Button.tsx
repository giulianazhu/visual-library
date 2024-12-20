import style from './styles.module.scss'

interface ButtonProps {
  label: string
  onClick: () => void
}

function Button({ label, onClick }: ButtonProps) {
  return (
    <button className={style.button} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button
