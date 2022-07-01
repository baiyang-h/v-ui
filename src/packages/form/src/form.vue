<template>
  <el-form
    ref="formRef"
    v-bind="option"
    :model="form"
    :rules="option.rules"
    @validate="validate"
  >
    <el-form-item
      v-for="(item, index) in option.columns"
      :key="item.prop || item.label || index"
      v-bind="$filterObject(item, 'attrs')"
      :label="item.label"
      :prop="item.prop"
    >
      <component
        :is="getComNameOrModule(item)"
        v-bind="item.attrs"
        :placeholder="wrapPlaceholder(item)"
        v-model="form[item.prop]"
      >

      </component>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onOk">确认</el-button>
      <el-button @click="onCancel">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'Form'
}
</script>
<script setup>
import { ref, reactive, toRaw, onBeforeMount } from 'vue'
import typeMap, { placeholderSelectTypeArr } from './type'
import { merge } from './methods'

const props = defineProps({
  option: {
    type: Object,
    required: true,
    default(rawProps) {
      return {
        ...rawProps,
        columns: [],
      }
    }
  }
})
const emit = defineEmits([
  'validate',
  'onOk',
  'onCancel'
])

const formRef = ref()
const form = reactive({})

// 事件
const validate = (...args) => emit('validate', ...args)

// 方法
defineExpose({
  formRef,
  validate: (...args) => formRef && formRef.value.validate(...args),
  validateField: (...args) => formRef && formRef.value.validateField(...args),
  resetFields: (...args) => formRef && formRef.value.resetFields(...args),
  scrollToField: (...args) => formRef && formRef.value.scrollToField(...args),
  clearValidate: (...args) => formRef && formRef.value.clearValidate(...args),
  setFieldsValue,
  getFieldsValue
})

onBeforeMount(() => {
  initForm()
})

// 初始化form数据，
function initForm() {
  const { columns } = props.option
  // 默认初始化表单数据，初始都为undefined
  columns.forEach(column => {
    form[column.prop] = undefined
  })
}

// 得到form的属性值
function getFieldsValue(nameList=[]) {
  if(nameList.length) {
    let o = {}
    nameList.forEach(key => {
      if(key in form) {
        o[key] = form[key]
      }
    })
    return o
  } else {
    return toRaw(form)
  }
}

// 设置form属性值
function setFieldsValue(values) {
  merge(form, values)
}

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

// 初始化表单控件的 placeholder
function wrapPlaceholder(row) {
  if(row.attrs && row.attrs.placeholder) return row.attrs.placeholder
  return placeholderSelectTypeArr.includes(row.type) ? '请选择' : '请输入'
}

// 按钮部分 确认/取消
const onOk = async () => {
  emit('onOk', form)
}
const onCancel = () => {
  emit('onCancel')
}

</script>

<style scoped>

</style>
