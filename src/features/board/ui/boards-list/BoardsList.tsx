import style from './styles.module.scss'
import { Card, Flex } from 'antd'
import { NavLink } from 'react-router'
import routes from 'core/configs/routes'
import { RoutePath } from 'types/enums'

interface BoardsListProps {
  boards: any[]
}

function BoardsList({ boards }: BoardsListProps) {
  const boardId = 1
  return (
    <div className={style['board-list']}>
      {boards}
      <Flex gap="small" wrap={true} className="py-30">
        <NavLink to={routes.board.url.replace(RoutePath.Detail, boardId.toString())}>
          <Card className="h-ab-300 w-ab-200"></Card>
        </NavLink>
        <Card className="h-ab-300 w-ab-200"></Card>
        <Card className="h-ab-300 w-ab-200"></Card>
      </Flex>
    </div>
  )
}

export default BoardsList
