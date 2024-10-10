import { axiosInterceptors, onFetchErr } from 'frontend_common/fetch'

import App from './App.vue'
import router from '@/router.js'
import i18n from '@/i18n'
import './index.css'
import ImageBox from '@/components/ImageBox.vue'

axiosInterceptors({
	request: config => {
		return config
	},
	response: async (response) => {
		const { data = '', code, message } = response.data

		switch (code) {
			// 成功返回
			case 1:
			case 200:
				return response.config.returnAll ? response.data : data
			// 登录失效返回
			case 401:
			case 411:
				return onFetchErr(response.data)
			// 默认提示后端返回错误信息
			default:
				return onFetchErr(response.data)
		}
	}
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.use(createPinia())
app.component('image-box', ImageBox)
app.mount('#app')
