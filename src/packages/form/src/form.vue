<template>
  <el-form
    ref="formRef"
    v-bind="option"
    :model="form"
    :rules="option.rules"
  >
    <el-form-item
      v-for="(item, index) in option.columns"
      :key="item.prop || item.label || index"
      :label="item.label"
      :prop="item.prop"
    >
      <component :is="getComNameOrModule(item)">

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
import { ref, reactive, computed } from 'vue'
import typeMap from './type'

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

const formRef = ref()
const form = reactive({
  name: 'Hello',
  region: '',
})

// 初始化form数据，
function initForm() {
  const { columns } = props.option
}

function getComNameOrModule(item) {
  if(item.type === 'custom') {
    return item.component
  } else if(item.type === 'html') {
    return item.html
  } else {
    return typeMap[item.type]
  }
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
