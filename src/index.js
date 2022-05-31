import { BRAND } from './config/constant'

import Table from 'packages/table/index'

const components = [
  Table
]

const install = (Vue, opts = {}) => {
  components.forEach(component => {
    Vue.component(BRAND+component.name, component);
  });
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.0',
  install,
  Table
}
