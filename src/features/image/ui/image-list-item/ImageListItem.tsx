import style from './styles.module.scss'
import { Checkbox, Flex, Typography } from 'antd'
import { NavLink, useParams } from 'react-router'
import routes from 'core/configs/routes'
import { RoutePath } from 'types/enums'
import { ApiImage } from 'types/api/image'
import StarButton from 'shared/ui/star-button'

interface ImageListItemProps {
  image: ApiImage
  onStar: () => void
}

function ImageListItem({ image, onStar }: ImageListItemProps) {
  const boardId = useParams().id!
  return (
    <Flex vertical gap="small" className={style['image-list-item']}>
      <Flex gap="small" className="image-actions">
        <StarButton active={image.isFavourite} onClick={onStar} />
      </Flex>
      <NavLink
        to={routes.image.url.replace(RoutePath.SubDetail, image.id.toString()).replace(RoutePath.Detail, boardId)}
      >
        <div className="image-container">
          <img src={image.url} />
        </div>
      </NavLink>
      <Flex className="h-100" justify="space-between">
        <Flex vertical justify="center">
          <Typography.Text className="font-500">{image.title}</Typography.Text>
        </Flex>
        <Checkbox value={image.id} />
      </Flex>
    </Flex>
  )
}

export default ImageListItem
