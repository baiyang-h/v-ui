import { produceComponentName } from './libs/method'
// import filterObject from './libs/function/filterObject'
// import addUnit from './libs/function/addUnit'
// import deepMerge from './libs/function/deepMerge'

import Gap from './packages/gap/index'
import Text from './packages/text/index'
import Select from './packages/widget/select/index'
import RadioGroup from './packages/widget/radio-group/index'
import CheckboxGroup from './packages/widget/checkbox-group/index'
import Table from './packages/table/index'
import Form from './packages/form/index'

const components = [
  Gap,
  Text,
  Select,
  RadioGroup,
  CheckboxGroup,
  Table,
  Form
]

const install = (Vue, opts = {}) => {
  components.forEach(component => {
    Vue.component(produceComponentName(component.name), component);
  });

  // 注入全局方法
  // Object.keys($func).forEach(key => {
  //   Vue.config.globalProperties['$'+key] = $func[key]
  // })
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
