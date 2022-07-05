<template>
  <el-form-item
    v-bind="filterFormItemProps"
    :label="row.label"
    :prop="prop"
  >
    <component
      :is="getComNameOrModule(row)"
      v-bind="row.attrs"
      :placeholder="wrapPlaceholder"
      :modelValue="modelValue"
      @update:modelValue="$emit('update:modelValue', $event, prop)"
    />
  </el-form-item>
</template>

<script>
export default {
  name: "FormItemDefault"
}
</script>
<script setup>
import {computed} from "vue";
import filterObject from '@/libs/function/filterObject'
import typeMap, {placeholderSelectTypeArr} from "./type";

const props = defineProps({
  modelValue: {
    default: undefined
  },
  row: {
    type: Object,
    default() {
      return {}
    }
  },
  prop: {
    type: String,
    default: ''
  }
})
defineEmits(['update:modelValue'])

// 过滤不必要的属性
const filterFormItemProps = computed(() => filterObject(props.row, ['attrs', 'span', 'offset', 'push', 'pull', 'xs', 'sm', 'md', 'lg', 'xl', 'tag']))
const wrapPlaceholder = computed(() => {
  if(props.row.attrs && props.row.attrs.placeholder) return props.row.attrs.placeholder
  return placeholderSelectTypeArr.includes(props.row.type) ? '请选择' : '请输入'
})

// 根据type的值获取到相应的表单控件名或者表单组件
function getComNameOrModule(item) {
  if(item.type === 'custom') {
    return item.component
  } else if(item.type === 'html') {
    return item.html
  } else {
    return typeMap[item.type]
  }
}

</script>
