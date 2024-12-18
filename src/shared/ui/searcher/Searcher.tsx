import style from './styles.module.scss'
import { Form, Input } from 'antd'
import i18next from 'i18next'

interface SearcherProps {
  placeholder?: string
}

function Searcher({ placeholder = i18next.t('placeholder.search') }: SearcherProps) {
  return (
    <Form>
      <Form.Item>
        <div className={style['searcher']}>
          <Input.Search placeholder={placeholder} />
        </div>
      </Form.Item>
    </Form>
  )
}

export default Searcher
