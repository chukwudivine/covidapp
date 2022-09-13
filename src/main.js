import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import axios from 'axios'

axios.defaults.baseURL = 'https://api.covid19api.com'

createApp(App).use(router).mount('#app')
