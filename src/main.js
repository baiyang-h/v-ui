import { createApp } from 'vue'
import router from "./router";

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import AUi from './index'

import App from './App.vue'

createApp(App).use(router).use(ElementPlus, {
  locale: zhCn,
}).use(AUi).mount('#app')
