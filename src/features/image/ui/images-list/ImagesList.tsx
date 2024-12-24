import style from './styles.module.scss'
import { Card, Flex } from 'antd'
import { NavLink } from 'react-router'
import routes from 'core/configs/routes'
import { RoutePath } from 'types/enums'

interface ImagesListProps {
  images: any[]
}

function ImagesList({ images }: ImagesListProps) {
  console.log(routes.image.url)
  return (
    <div className={style['image-list']}>
      {images}
      <Flex gap="small" wrap={true} className="py-30">
        <NavLink to={routes.image.url.replace(RoutePath.Detail, '1').replace(RoutePath.SubDetail, '1')}>
          <Card className="h-ab-300 w-ab-200"></Card>
        </NavLink>
        <Card className="h-ab-300 w-ab-200"></Card>
        <Card className="h-ab-300 w-ab-200"></Card>
      </Flex>
    </div>
  )
}

export default ImagesList
