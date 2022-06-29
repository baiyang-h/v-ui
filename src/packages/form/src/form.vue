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
  </el-form>
</template>

<script>
export default {
  name: 'Form'
}
</script>
<script setup>
import { ref, reactive, computed, onBeforeMount } from 'vue'
import typeMap, { placeholderSelectTypeArr } from './type'

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
const emit = defineEmits(['validate'])

const formRef = ref()
const form = reactive({})

// 事件
const validate = (...args) => emit('validate', ...args)

// 方法
defineExpose({
  validate: (...args) => formRef && formRef.value.validate(...args),
  validateField: (...args) => formRef && formRef.value.validateField(...args),
  resetFields: (...args) => formRef && formRef.value.resetFields(...args),
  scrollToField: (...args) => formRef && formRef.value.scrollToField(...args),
  clearValidate: (...args) => formRef && formRef.value.clearValidate(...args),
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

const submitForm = async () => {
  if (!formRef.value) return
  await formRef.value.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = () => {
  if (!formRef.value) return
  formRef.value.resetFields()
}

</script>

<style scoped>

</style>
