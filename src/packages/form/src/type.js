import { produceComponentName } from '@/libs/methods.js'
import Text from '@/packages/text/index'
import RadioGroup from '@/packages/widget/radio-group/index'
import Select from '@/packages/widget/select/index'

export default {
  text: Text,
  input: 'el-input',
  inputNumber: 'el-input-number',
  select: Select,
  radioGroup: RadioGroup,
  checkbox: 'el-checkbox',
  checkboxGroup: '',
  rate: 'el-rate',
  selectV2: 'el-select-v2',
  slider: 'el-slider',
  time: 'el-time-picker',
  date: 'el-date-picker',
  selectTime: 'el-time-select',
  colorPicker: 'el-color-picker',
  cascader: 'el-cascader',
  // custom: '自定义'
}
