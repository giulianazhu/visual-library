import { useTranslation } from 'react-i18next'
import { Button, Checkbox, Flex } from 'antd'
import style from './styles.module.scss'

interface ListHeaderProps<DataType> extends React.PropsWithChildren {
  checkedList: DataType[]
  checkAll: boolean
  onChange: (checkedList: DataType[]) => void
  onDelete: () => void
  onCheckAllChange: () => void
  isDeleting: boolean
  disabled: boolean
  customEditButton?: React.ReactNode
}

function ListHeader<DataType>({
  checkedList,
  checkAll,
  onChange,
  onCheckAllChange,
  onDelete,
  isDeleting,
  customEditButton,
  children: options,
  disabled,
}: ListHeaderProps<DataType>) {
  const { t } = useTranslation()

  return (
    <div className={style['delete-checker']}>
      <Flex className="list-header">
        <Flex align="baseline" gap="medium">
          <Checkbox onChange={onCheckAllChange} checked={checkAll} disabled={disabled}>
            <span>{t('action.selectAll')}</span>
          </Checkbox>
          {checkedList.length > 0 && (
            <Flex gap="small" className="actions">
              <Button type="link" className="p-0" loading={isDeleting}>
                <span className="delete-btn" onClick={onDelete}>
                  {t('action.delete')}
                </span>
              </Button>
              <Button type="link" className="p-0">
                <span className="cancel-btn" onClick={onCheckAllChange}>
                  {t('action.cancel')}
                </span>
              </Button>
            </Flex>
          )}
        </Flex>
        {customEditButton ? customEditButton : <Button type="link" className="placeholder-button"></Button>}
      </Flex>
      <Checkbox.Group className="w-100" value={checkedList} onChange={onChange}>
        {options}
      </Checkbox.Group>
    </div>
  )
}

export default ListHeader
