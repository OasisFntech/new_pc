import App from './App.vue'
import router from '@/router.js'
import i18n from '@/i18n'
import '@/api'
import './index.css'

const app = createApp(App)
app.use(router)
app.use(i18n)
app.use(createPinia())
app.mount('#app')
