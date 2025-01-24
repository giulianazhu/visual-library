import Seo from 'shared/ui/seo'
import style from './styles.module.scss'

function Help() {
  return (
    <Seo pageLabel="help.help">
      <div className="page">
        <div className={style['help']}>Help</div>
      </div>
    </Seo>
  )
}

export default Help
