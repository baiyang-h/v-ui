<template>
  <el-input
    ref="inputRef"
    v-bind="props"
    :style="[wrapStyle]"
    :model-value="modelValue"
    @update:modelValue="onUpdate"
    @blur="$emit('blur', $event)"
    @focus="$emit('focus', $event)"
    @change="$emit('change', $event)"
    @input="$emit('input', $event)"
    @clear="$emit('clear', $event)"
  >
    <slot name="prefix"></slot>
    <slot name="suffix"></slot>
    <slot name="prepend"></slot>
    <slot name="append"></slot>
  </el-input>
</template>

<script>
/**
 * @description el-input 输入框，
 * @property {String} modelValue 输入的值
 * @property {String | Number} width select的长度，可以是 100、'100'、100px、100%
 * @property {RegExp} reg 增加输入值得正则判断, /\d\/ 只能输入数字,  /\[a-zA-Z]/ 只能输入字母
 * @example <p-input v-model="value">
 */
import { ElInput } from 'element-plus'
export default {
  name: 'Input',
  extends: ElInput
}
</script>
<script setup>
import {computed, ref} from "vue";
import addUnit from '@/libs/function/addUnit'
import { isRegExp } from '@/libs/function/type'

const props = defineProps({
  modelValue: {
    default: undefined
  },
  width: [String, Number],
  // 增加正则判断
  reg: {
    validator(value) {
      if(!isRegExp(value)) console.error('reg需是一个正则')
      return isRegExp(value)
    }
  },
})
const emit = defineEmits([
  'update:modelValue',
  'blur',
  'focus',
  'change',
  'input',
  'clear',
])
const inputRef = ref()

defineExpose({
  inputRef,
  focus: (...args) => inputRef && inputRef.value.focus(...args),
  blur: (...args) => inputRef && inputRef.value.blur(...args),
  select: (...args) => inputRef && inputRef.value.select(...args)
})

function onUpdate(value) {
  // 去掉首尾空格
  value = value.replace(/^\s+|\s+$/g, '')

  // 输入的值要符合正则
  if(value && props.reg) {
    let replaceText = ''
    for(let t of value) {
      if(props.reg.test(t)) {
        replaceText += t
      }
    }
    value = replaceText
  }

  emit('update:modelValue', value)
}

const wrapStyle = computed(() => {
  const style = {};
  // 通过调用addUnit()方法，如果有单位，如百分比、px单位等，直接返回，如果是纯粹的数值，则加上px单位
  style.width = addUnit(props.width)
  return style
})

</script>