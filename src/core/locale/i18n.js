import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import api from 'core/configs/api'
import { getLanguage } from 'core/helpers/localizationHelper'
import { getLocalStorageUser } from 'features/user/helpers'

const backendOptionsLocal = {
  //develop branch code
  loadPath: api.getLocalLabels('{{lng}}'), //'{{lng}}' allow dynamic language loading
  allowMultiLoading: false,
  crossDomain: false,
  withCredentials: false,
  overrideMimeType: false,

  requestOptions: {
    // used for fetch, can also be a function (payload) => ({ method: 'GET' })
    mode: 'cors',
    credentials: 'same-origin',
    cache: 'default',
  },

  reloadInterval: false,
}

async function initLanguage() {
  await i18n
    // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
    // learn more: https://github.com/i18next/i18next-http-backend
    // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
    .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
      fallbackLng: getLocalStorageUser()?.language || 'en',
      debug: true,
      supportedLngs: ['en', 'it', 'cn', 'jp'],
      backend: backendOptionsLocal,
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
    })
}

export default initLanguage
