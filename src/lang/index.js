import { createI18n } from 'vue-i18n'
import enLang from './en'
import ptLang from './pt'
import zhLang from './zh'
import idLang from './id'

const messages = {
	en: enLang,
	pt: ptLang,
	zh: zhLang,
	id: idLang
}

const language = localStorage.getItem('language')

const i18n = createI18n({
	legacy: false,
	locale: language,
	fallbackLocale: 'en',
	messages
})

console.log(messages)

export default i18n
