import i18next from 'i18next'
import style from './styles.module.scss'
import { Dropdown, MenuProps } from 'antd'
import { setLocalStorageUser } from 'features/user/helpers'
import useUserStore from 'features/app/store/user'
import { useTranslation } from 'react-i18next'

function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const languages = [
    { key: 'en', label: 'EN' },
    { key: 'it', label: 'IT' },
    { key: 'cn', label: 'CN' },
    { key: 'jp', label: 'JP' },
  ]

  const currLanguage = i18next.language.toUpperCase()
  const { user, setUser } = useUserStore((state) => state)

  const handleLanguageChange: MenuProps['onClick'] = ({ key }) => {
    i18n.changeLanguage(key)
    setUser({ ...user, preferredLanguage: key })
    setLocalStorageUser({ ...user, preferredLanguage: key })
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
