import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import 'virtual:svg-icons-register'
import SvgIcon from './components/SvgIcon.vue'

const APP = createApp(App)
APP.component('svg-icon', SvgIcon)
APP.use(router)
APP.mount('#app')