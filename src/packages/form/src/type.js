import { produceComponentName } from '@/libs/methods.js'
import Text from '@/packages/text/index'

export default {
  text: Text,
  input: 'el-input',
  inputNumber: 'el-input-number',
  select: 'el-select',
  radioGroup: produceComponentName('radio-group', false),
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
}