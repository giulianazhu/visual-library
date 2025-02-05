import style from './styles.module.scss'
import { AddIcon } from 'shared/icons'
import FormDrawer from 'shared/ui/form-drawer'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Create from 'features/board/controllers/create'
import EditItem from 'features/board/controllers/edit-item'
import { ApiBoard } from 'types/api/board'

interface BoardsListProps {
  boards: ApiBoard[] | undefined
}

function BoardsList({ boards }: BoardsListProps) {
  const [isCreate, setIsCreate] = useState(false)

  const { t } = useTranslation()
  return (
    <div className={style['boards-list']}>
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
      {boards?.map((board, i) => <EditItem board={board} key={i} />)}
    </div>
  )
}

export default BoardsList
