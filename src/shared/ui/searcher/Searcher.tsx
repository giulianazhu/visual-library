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
        <Input.Search placeholder={placeholder} className={style['searcher']} />
      </Form.Item>
    </Form>
  )
}

export default Searcher
