import { createApp } from 'vue'
import router from "./router";

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import AUi from './index'

import App from './App.vue'

createApp(App).use(router).use(ElementPlus).use(AUi).mount('#app')
