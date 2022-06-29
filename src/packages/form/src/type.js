import Text from '@/packages/text/index'
import Select from '@/packages/widget/select/index'
import RadioGroup from '@/packages/widget/radio-group/index'
import CheckboxGroup from '@/packages/widget/checkbox-group/index'

export default {
  text: Text,
  input: 'el-input',
  inputNumber: 'el-input-number',
  select: Select,
  radioGroup: RadioGroup,
  checkbox: 'el-checkbox',
  checkboxGroup: CheckboxGroup,
  rate: 'el-rate',
  // selectV2: 'el-select-v2',
  slider: 'el-slider',
  switch: 'el-switch',
  time: 'el-time-picker',
  date: 'el-date-picker',
  selectTime: 'el-time-select',
  colorPicker: 'el-color-picker',
  cascader: 'el-cascader',
  // custom: '自定义'
}

// 显示请选择 placeholder
export const placeholderSelectTypeArr = [
  'select',
  'time',
  'date',
  'selectTime',
  'cascader',
]