import i18next from 'i18next'
import style from './styles.module.scss'
import { Dropdown, MenuProps } from 'antd'

function LanguageSwitcher() {
  const languages = [
    { key: 'en', label: 'EN' },
    { key: 'it', label: 'IT' },
  ]
  const currLanguage = i18next.language.toUpperCase()

  const handleLanguageChange: MenuProps['onClick'] = ({ key }) => {
    i18next.changeLanguage(key)
  }

  return (
    <div className={style['language-switcher']}>
      <Dropdown menu={{ items: languages, onClick: handleLanguageChange }}>
        <span>{currLanguage}</span>
      </Dropdown>
    </div>
  )
}

export default LanguageSwitcher
