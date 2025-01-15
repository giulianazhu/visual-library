import { useTranslation } from 'react-i18next'
import { Button, Checkbox, Flex } from 'antd'
import style from './styles.module.scss'
import IconWrapper from '../icon-wrapper'
import { EditPenIcon } from 'shared/icons'

interface ListHeaderProps<DataType> extends React.PropsWithChildren {
  checkedList: DataType[]
  checkAll: boolean
  onChange: (checkedList: DataType[]) => void
  onCheckAllChange: () => void
  customEditButton?: React.ReactNode
}

function ListHeader<DataType>({
  checkedList,
  checkAll,
  onChange,
  onCheckAllChange,
  children: options,
  customEditButton,
}: ListHeaderProps<DataType>) {
  const { t } = useTranslation()

  return (
    <div className={style['delete-checker']}>
      <Flex className="list-header">
        <Flex align="baseline" gap="medium">
          <Checkbox onChange={onCheckAllChange} checked={checkAll}>
            <span>{t('action.selectAll')}</span>
          </Checkbox>
          {checkedList.length > 0 && (
            <Flex gap="small" className="actions">
              <span className="delete-btn">{t('action.delete')}</span>
              <span className="cancel-btn" onClick={onCheckAllChange}>
                {t('action.cancel')}
              </span>
            </Flex>
          )}
        </Flex>
        {customEditButton ? customEditButton : <Button type="link" className="placeholder-button"></Button>}
      </Flex>
      <Checkbox.Group value={checkedList} onChange={onChange}>
        {options}
      </Checkbox.Group>
    </div>
  )
}

export default ListHeader
