import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import 'virtual:svg-icons-register'
import SvgIcon from './components/SvgIcon.vue'
import ThemeBtn from './components/Theme.vue'
import Router from './components/Router.vue'

const APP = createApp(App)
APP.component('svg-icon', SvgIcon)
APP.component('ThemeBtn', ThemeBtn)
APP.component('Router', Router)
APP.use(router)
APP.mount('#app')