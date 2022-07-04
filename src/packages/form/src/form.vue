<template>
  <el-form
    ref="formRef"
    :class="$addPrefix('form', false)"
    v-bind="$filterObject(_option, ['columns', 'showBtn'])"
    :model="form"
    :rules="_option.rules"
    @validate="validate"
  >
    <el-form-item
      v-for="(item, index) in _option.columns"
      :ref="el => setFormItemRef(item, el)"
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
    <el-form-item v-if="_option.showBtn" :class="$addPrefix('form__btn', false)">
      <el-button type="primary" @click="onOk" :class="$addPrefix('form__btn--ok', false)">{{ _option.okText }}</el-button>
      <el-button @click="onCancel" :class="$addPrefix('form__btn--cancel', false)">{{ _option.cancelText }}</el-button>
    </el-form-item>
    <template v-if="$slots.button"><slot name="button" /></template>
  </el-form>
</template>

<script>
export default {
  name: 'Form'
}
</script>
<script setup>
import {ref, reactive, toRaw, onBeforeMount, computed, onMounted} from 'vue'
import typeMap, { placeholderSelectTypeArr } from './type'
import { merge } from './methods'
import newProps from './props'
import _ from 'lodash'

const props = defineProps({
  option: {
    type: Object,
    required: true,
  }
})
const emit = defineEmits([
  'validate',
  'onOk',
  'onCancel'
])

const formRef = ref()
const form = reactive({})
const formItemRefs = reactive({})

// 初始化 option，为了给有些属性设置默认值
const _option = computed(() => ({
  ...newProps,
  ...props.option,
}))

// 事件
const validate = (...args) => emit('validate', ...args)

// 方法
defineExpose({
  formRef,
  validate: (...args) => formRef && formRef.value.validate(...args),
  validateField: (...args) => formRef && formRef.value.validateField(...args),
  resetFields,
  scrollToField: (...args) => formRef && formRef.value.scrollToField(...args),
  clearValidate: (...args) => formRef && formRef.value.clearValidate(...args),
  // 设置表单的值（该值将直接传入 form store 中。如果你不希望传入对象被修改，请克隆后传入）
  setFieldsValue,
  // 获取一组字段名对应的值，会按照对应结构返回。默认返回现存字段值，当调用 getFieldsValue() 时返回所有值， getFieldsValue([key1, key2]) 多个值
  getFieldsValue,
  // 获取对应字段名的值
  getFieldValue,
  // 获取对应字段名的ref
  getFieldRef
})

onBeforeMount(() => {
  initForm()
})
onMounted(() => {
  console.log(formItemRefs)
})

// 初始化form数据，
function initForm() {
  // 默认初始化表单数据，初始都为undefined
  _option.value.columns.forEach(column => {
    form[column.prop] = undefined
  })
}

// 得到全部或多个form的属性值
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
// 得到单个form的属性值
function getFieldValue(name) {
  if(name) {
    return form[name]
  }
}
// 设置form属性值
function setFieldsValue(values) {
  merge(form, values)
}
// 得到单个formItem的ref
function getFieldRef(name) {
  if(name) {
    return formItemRefs[name]
  }
}
// 重置所有表单内容和状态
function resetFields(...args) {
  if(formRef) {
    formRef.value.resetFields(...args)
    // fix: 此处多此一举时因为在对自定义的组件进行重置的时候，如果fom传入的是对象的形式，多个表单，重置后检验会执行，所以对自定义的表单重新 resetField
    setTimeout(() => {
      Object.keys(formItemRefs).forEach(key => {
        formItemRefs[key].resetField()
      })
    })

    // function aa(list) {
    //   list.forEach(item => {
    //     if(item.prop) {
    //
    //     }
    //   })
    // }
  }
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

// 初始化设置 form-item 的每个 ref
function setFormItemRef(row, ref) {
  formItemRefs[row.prop] = ref
}

// 按钮部分 确认/取消
const onOk = async () => {
  emit('onOk', toRaw(form))
}
const onCancel = () => {
  emit('onCancel')
}

</script>

<style scoped>
.el-form :deep(.el-rate) .el-rate__item {
  display: flex;
  align-items: center;
}
</style>
