import style from './styles.module.scss'
import { Button, Flex, Space } from 'antd'
import { AddIcon, EditPenIcon } from 'shared/icons'
import FormDrawer from 'shared/ui/form-drawer'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Create from 'features/board/controllers/create'
import EditItem from 'features/board/controllers/edit-item'
import ListHeader from 'shared/ui/list-header'
import IconWrapper from 'shared/ui/icon-wrapper'

interface BoardsListProps {
  boards: any[]
}

function BoardsList({ boards }: BoardsListProps) {
  const [isCreate, setIsCreate] = useState(false)

  const { t } = useTranslation()
  return (
    <Flex gap="small" wrap={true} className={style['boards-list']}>
      {boards.map((board, i) => (
        <EditItem board={board} key={i} />
      ))}
      <FormDrawer
        title={t('board.create')}
        open={isCreate}
        setOpen={setIsCreate}
        customDrawerButton={
          <div className="add-board" onClick={() => setIsCreate(true)}>
            <AddIcon size={30} />
          </div>
        }
      >
        <Create setIsCreate={setIsCreate} />
      </FormDrawer>
    </Flex>
  )
}

export default BoardsList
