<template>
  <el-form
    ref="formRef"
    :class="$addPrefix('form', false)"
    :model="form"
    :rules="_option.rules"
    :inline="_option.inline"
    :label-position="_option.labelPosition"
    :label-width="_option.labelWidth"
    :label-suffix="_option.labelSuffix"
    :hide-required-asterisk="_option.hideRequiredAsterisk"
    :show-message="_option.showMessage"
    :inline-message="_option.inlineMessage"
    :status-icon="_option.statusIcon"
    :validate-on-rule-change="_option.validateOnRuleChange"
    :size="_option.size"
    :disabled="_option.disabled"
    @validate="validate"
  >
    <form-item-dynamic
      v-for="(item, index) in _option.columns"
      :key="item.prop || item.label || index"
      :row="item"
      :prop="item.prop"
      :modelValue="form"
      @update:modelValue="setFormModel"
    >
      <template v-for="item in mainSlot" #[item]>
        <slot :name="item" />
      </template>
    </form-item-dynamic>
    <el-form-item v-if="_option.showBtn" :class="$addPrefix('form__btn', false)">
      <el-button
        type="primary"
        :class="$addPrefix('form__btn--ok', false)"
        @click="onOk"
      >
        {{ _option.okText }}
      </el-button>
      <el-button
        v-if="_option.showCancelBtn"
        :class="$addPrefix('form__btn--cancel', false)"
        @click="onCancel"
      >
        {{ _option.cancelText }}
      </el-button>
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
import {ref, reactive, toRaw, onBeforeMount, computed, provide, nextTick, useSlots} from 'vue'
import _ from 'lodash'
import { merge } from './methods'
import newProps from './props'
import FormItemDynamic from './item-dynamic.vue'

const props = defineProps({
  modelValue: {
    type: Object,
    default() {
      return {}
    }
  },
  option: {
    type: Object,
    required: true,
  }
})
const emit = defineEmits([
  'update:modelValue',
  'validate',
  'onOk',
  'onCancel'
])

const formRef = ref()
const form = reactive({})
const formItemRefs = reactive({})

const slots = useSlots()

// 初始化 option，为了给有些属性设置默认值
const _option = computed(() => ({
  ...newProps,
  ...props.option,
}))
const mainSlot = computed(() => Object.keys(slots))

provide('instance', {
  // 提供给子组件一个设置 form-item 的ref的方法
  setFormItemRef,
  mainSlot: Object.keys(slots),
})

// 事件
const validate = (...args) => emit('validate', ...args)

// 方法
defineExpose({
  formRef,
  validate: (...args) => formRef && formRef.value.validate(...args),
  validateField: (...args) => formRef && formRef.value.validateField(...args),
  // 可传入一个数组表示要重置的表单 resetFields(['a1', 'b.b1'])
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
  getFieldRef,
})

onBeforeMount(() => {
  initForm()
})

// 初始化form数据，
function initForm() {
  // 默认初始化表单，初始都为undefined,以 columns 格式生成一个初始化得form
  const fn = (children, obj) => {
    children.forEach(child => {
      // 如果类型是 插槽的话
      if(child.type === 'slot') return
      if(child.type === 'row') {  // 类型是 row
        fn(child.children, obj)
      } else if(child.type === 'col') {  // 类型是 col
        obj[child.prop] = {}
        fn(child.children, obj[child.prop])
      } else {
        // 如果有默认值
        obj[child.prop] = child.defaultValue === undefined ? undefined : child.defaultValue
      }
    })
  }
  fn(_option.value.columns, form)
  // 表单默认值，只有初始化以及重置时生效,如果有设置的话
  if(_option.value.initialValues) {
    merge(form, _option.value.initialValues)
  }
  // 将组件外部设置得v-model值进行合并, 生成一个新的 form
  merge(form, props.modelValue)
  // 暴露给外部form,因为是对象的原因所以外部直接改变会影响内部
  emit('update:modelValue', form)
}

// 得到全部或多个form的属性值
function getFieldsValue(nameList=[]) {
  if(nameList.length) {
    let o = {}
    nameList.forEach(key => {
      o[key] = _.get(form, key)
    })
    return o
  } else {
    return toRaw(form)
  }
}
// 得到单个form的属性值
function getFieldValue(depProp) {
  if(depProp) {
    return _.get(form, depProp);
  }
}
// 设置form属性值
function setFieldsValue(fnOrValues) {
  if(typeof fnOrValues === 'function') { // 如果是函数的形式, 函数的参数值是form
    merge(form, fnOrValues(form))
  } else {  // 直接传入一个对象
    merge(form, fnOrValues)
  }
}
// 得到单个formItem的ref
function getFieldRef(name) {
  if(name) {
    return formItemRefs[name]
  }
}
// 重置所有表单内容和状态
function resetFields(args=[]) {
  if(formRef) {
    // fix: 此处多此一举时因为在对自定义的组件进行重置的时候，如果fom传入的是对象的形式，多个表单，重置后检验会执行，所以对自定义的表单重新 resetField\
    // 先执行 formRef.value.resetFields() 这个自定义校验还是会存在,所以下面再重新 nextTick 后执行一次
    formRef.value.resetFields()
    if(args && args.length) {
      nextTick(() => {
        args.forEach(key => {
          formItemRefs[key].resetField()
        })
      })
    } else {
      nextTick(() => {
        Object.values(formItemRefs).forEach(value => {
          value.resetField()
        })
      })
    }
  }
}

// 初始将 form-item 的每个 ref 保存到 formItemRefs
function setFormItemRef(ref, depProp) {
  formItemRefs[depProp] = ref
}

// 按钮部分 确认/取消
const onOk = async () => {
  emit('onOk', toRaw(form))
}
const onCancel = () => {
  emit('onCancel')
}

// 表单控件值改变
const setFormModel = (v, depProp) => {
  // v为修改的值， depProp为属性名 存在 from.a.b = 1 这种情况
  const propKeys = depProp.split('.')
  _.set(form, propKeys, v)
}

</script>

<style scoped>
.el-form :deep(.el-rate) .el-rate__item {
  display: flex;
  align-items: center;
}
</style>
