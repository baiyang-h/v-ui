<template>
  <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      :size="formSize"
      status-icon
  >
    <el-form-item label="Activity name" prop="name">
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <el-form-item label="Activity zone" prop="region">
      <el-select v-model="ruleForm.region" placeholder="Activity zone">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="inputNumber" prop="num">
      <el-input-number v-model="ruleForm.num" :min="1" :max="10" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"
      >Create</el-button
      >
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      <el-button @click="aaaaa()">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive, ref } from 'vue'

const formSize = ref('default')
const ruleFormRef = ref()
const ruleForm = reactive({
  name: '',
  region: '',
  num: undefined
})

const rules = reactive({
  name: [
    { required: true, message: 'Please input Activity name' },
  ],
  num: [
    { required: true, message: 'asdasd' },
  ],
  region: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change',
    },
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

function aaaaa() {
  // this.ruleForm = {
  //   ...this.ruleForm,
  //   name: 'shanghai',
  //   region: 'shanghai',
  // }
  this.ruleForm.name = 'shanghai'
  this.ruleForm.region = 'shanghai'
  this.ruleForm.num = 32
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}))
</script>