<template>
  <el-select
    ref="selectRef"
    v-bind="props"
    :style="[wrapStyle]"
    :model-value="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    @change="$emit('change', $event)"
    @visible-change="$emit('visible-change', $event)"
    @remove-tag="$emit('remove-tag', $event)"
    @clear="$emit('clear', $event)"
    @blur="$emit('blur', $event)"
    @focus="$emit('focus', $event)"
  >
    <slot name="prefix"></slot>
    <slot name="empty"></slot>
    <div v-if="options">
      <template v-for="option in options">
        <el-option-group
          v-if="option.options && option.options.length"
          :key="option.label"
          v-bind="option"
          :label="option.value || option.label"
        >
          <el-option
            v-for="item in option.options"
            :key="item.value"
            v-bind="item"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-option-group>
        <el-option
          v-else
          :key="option.value"
          v-bind="option"
          :label="option.label"
          :value="option.value || option.label"
        />
      </template>
    </div>
    <slot v-else></slot>
  </el-select>
</template>

<script>
/**
 * @description el-select 选择框封装，增加了可配置方式，通过options配置
 * @property {Array}  options 可配置方式，不使用插槽的模式，直接通过可配置的方式传入，需要有 value、label 属性
 * @property {String | Number} width select的长度，可以是 100、'100'、100px、100%
 * @example <p-select v-model="value" :options="options" @change="change">
 */
import { ElSelect } from 'element-plus'
export default {
  name: 'Select',
  extends: ElSelect
}
</script>
<script setup>
import { ref, computed } from 'vue'
import addUnit from '@/libs/function/addUnit'

const props = defineProps({
  modelValue:{
    default: undefined
  },
  // {value, label, 其他option属性}
  options: {
    type: Array
  },
  width:[String, Number],
})
defineEmits([
  'update:modelValue',
  'change',
])

const selectRef = ref()

const focus = () => selectRef && selectRef.value.focus()
const blur = () => selectRef && selectRef.value.blur()

defineExpose({
  selectRef,
  focus,
  blur
})

const wrapStyle = computed(() => {
  const style = {};
  // 通过调用addUnit()方法，如果有单位，如百分比、px单位等，直接返回，如果是纯粹的数值，则加上px单位
  style.width = addUnit(props.width)
  return style
})



</script>