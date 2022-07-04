<template>
  <div>
    <el-row style="margin-bottom: 20px">
      <el-button type="primary" @click="onOk">提交</el-button>
      <el-button type="primary" @click="resetFields">重置</el-button>
      <el-button type="primary" @click="setFieldsValue">设置值</el-button>
      <el-button type="primary" @click="getFieldsValue">获取值</el-button>
    </el-row>
    <p-form
      ref="formRef"
      :option="option"
      @onOk="onOk"
      @onCancel="onCancel"
    />
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { ElMessage } from 'element-plus'
import Custom1 from './Custom1.vue'
import Custom2 from './Custom2.vue'

const formRef = ref(null)

const option = {
  showBtn: true,
  okText: '提交',
  cancelText: '取消',
  columns: [
    {
      type: 'row',
      children: [
        {
          type: 'input',
          label: 'Input1',
          prop: 'input1',
        },
        {
          type: 'input',
          label: 'Input2',
          prop: 'input2',
        }
      ]
    }
  ],
  rules: {
    input: [
      { required: true, message: '成功' },
    ],
    custom1: [
      { required: true, message: '必填' },
    ],
    custom2: [
      {
        validator(rule, value, callback) {
          console.log(222222)
          if(!value) return callback(new Error('必填'))
          if(!value.input && value.select) {
            return callback(new Error('必填2'))
          }
          if( value.select === 'beijing') {
            return callback()
          }
          callback(new Error('请选择北京'))
        },
        // trigger: 'blur'
      }
    ]
  }
}

const onOk = (values) => {
  if(!formRef.value) return
  formRef.value.validate((valid) => {
    if(valid) {
      console.log(values)
      ElMessage({
        message: '成功',
        type: 'success',
      })
    }
  })
}
const onCancel = () => {
  ElMessage('取消')
}
const resetFields = () => {
  formRef.value.resetFields()
}
const setFieldsValue = () => {
  if(!formRef.value) return
  formRef.value.setFieldsValue({
    text: '我是文本',
    input: '我是input',
    inputNumber: 3,
    select: 'Shanghai',
    radioGroup: 'Beijing',
    checkbox: true,
    checkboxGroup: ['Shanghai', 'HangZhou'],
    switch: true,
    rate: 3,
    slider: 37,
    time: 'Fri Jul 01 2022 11:22:28 GMT+0800 (中国标准时间)',
    date: ['Mon Jul 11 2022 00:00:00 GMT+0800 (中国标准时间)', 'Wed Aug 24 2022 00:00:00 GMT+0800 (中国标准时间)'],
    selectTime: '11:30',
    colorPicker: '#D90F0F',
    cascader: ['zhinan','daohang','dingbudaohang'],
    custom1: '我是自定义1',
    custom2: {
      input: '我是自定义2',
      select: 'beijing'
    }
  })
}

const getFieldsValue = () => {
  // 获取整个表单数据
  console.log(formRef.value.getFieldsValue())
  // 获取表单的多个数据
  console.log(formRef.value.getFieldsValue(['input', 'select']))
  // 获取表单的单个数据
  console.log(formRef.value.getFieldValue('input'))
}
</script>
