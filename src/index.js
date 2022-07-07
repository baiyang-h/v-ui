import { addPrefix } from './libs/method'
import filterObject from './libs/function/filterObject'
// import addUnit from './libs/function/addUnit'
// import deepMerge from './libs/function/deepMerge'

import Gap from './packages/gap/index'
import Text from './packages/text/index'
import Input from './packages/widget/input/index'
import Select from './packages/widget/select/index'
import RadioGroup from './packages/widget/radio-group/index'
import CheckboxGroup from './packages/widget/checkbox-group/index'
import Table from './packages/table/index'
import Form from './packages/form/index'

const components = [
  Gap,
  Text,
  Input,
  Select,
  RadioGroup,
  CheckboxGroup,
  Table,
  Form
]

const func = {
  // 将对象中的某个属性或者多个属性过滤掉
  filterObject,
  // 添加前缀
  addPrefix
}

const install = (Vue, opts = {}) => {
  components.forEach(component => {
    Vue.component(addPrefix(component.name), component);
  });

  // 注入全局方法
  /*
   * 1. 可直接在 template 中使用 $filterObject 使用
   * 2. 选项式api使用 this.$filterObject()
   * 3. 组合式api使用
   *    import { getCurrentInstance } from 'vue'
   *    const instance = getCurrentInstance()
   *    instance.appContext.config.globalProperties.$filterObject()
   */
  Object.keys(func).forEach(key => {
    Vue.config.globalProperties['$'+key] = func[key]
  })
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
