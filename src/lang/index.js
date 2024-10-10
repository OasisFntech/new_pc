import { createI18n } from 'vue-i18n'
import enLang from './en'
import ptLang from './pt'
import zhLang from './zh'
import idLang from './id'

import enUS from 'vant/es/locale/lang/en-US'
import ptBR from 'vant/es/locale/lang/pt-BR'
import zhCN from 'vant/es/locale/lang/zh-CN'
import idId from 'vant/es/locale/lang/id-ID'
import { Locale } from 'vant'

const messages = {
	en: {
		...enLang,
	},
	pt: {
		...ptLang
	},
	zh: {
		...zhLang
	},
	id: {
		...idLang
	},
}

const language = localStorage.getItem('language')

const i18n = createI18n({
	globalInjection: true,
	legacy: false,
	locale: language,
	missingWarn: false,
	silentTranslationWarn: true,
	silentFallbackWarn: true,
	fallbackWarn: false,
	fallbackLocale: 'en',
	messages
})


export const { t,locale } = i18n.global

export const setVantLocale = () => {
	switch (language) {
		case 'zh':
			Locale.use('zh-CN', zhCN)
			break
		case 'id':
			Locale.use('id-ID', idId)
			break
		case 'en':
		case 'ng':
			Locale.use('en-US', enUS)
			break
		case 'pt':
		default:
			Locale.use('pt-Br', ptBR)
			break
	}
}

export default i18n
