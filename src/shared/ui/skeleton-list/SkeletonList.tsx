import style from './styles.module.scss'
import { Skeleton } from 'antd'

function SkeletonList() {
  return (
    <div className={style['skeleton-list']}>
      {Array.from({ length: 10 }).map((_, i) => (
        <Skeleton.Node key={i} active />
      ))}
    </div>
  )
}

export default SkeletonList
