<template>
  <el-form
    ref="formRef"
    v-bind="option"
    :model="form"
    :rules="option.rules"
  >
    <el-form-item label="Activity name" prop="name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity zone" prop="region">
      <el-select v-model="form.region" placeholder="Activity zone">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
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

defineProps({
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