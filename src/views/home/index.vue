<template>
  <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
  >
    <el-form-item label="Activity name" prop="num">
      <el-input-number v-model="ruleForm.num" />
    </el-form-item>
    <el-form-item>
      <el-button @click="setFieldsValue">set</el-button>
      <el-button type="primary" @click="submitForm(ruleFormRef)"
      >Create</el-button
      >
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive, ref } from 'vue'

const ruleFormRef = ref()
const ruleForm = reactive({
  num: undefined,
})

const rules = reactive({
  num: [
    { required: true, message: 'Please input Activity name'},
  ],
})

const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}
const setFieldsValue = () => {
  ruleForm.num = 22
}
</script>
