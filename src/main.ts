import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { networkAxiosInstance } from './service/index'

networkAxiosInstance.request({
  url: '/login',
  method: 'POST',
  data: { name: 'coderwhy', password: '123456' }
})

createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
