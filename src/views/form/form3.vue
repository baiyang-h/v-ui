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
      v-model="form"
      :option="option"
      @onOk="onOk"
      @onCancel="onCancel"
    >
      <template #aaa>
        <el-form-item label="插槽" prop="slot1">
          <el-input v-model="form.slot1" />
        </el-form-item>
      </template>
      <template #bbb>
        <el-form-item>
          <el-form-item label="插槽2-1" prop="slot2">
            <el-input v-model="form.slot2" />
          </el-form-item>
          <el-form-item label="插槽2-2" prop="slot3">
            <el-input v-model="form.slot3" />
          </el-form-item>
        </el-form-item>
      </template>
      <template #ccc>
        <el-form-item label="嵌套插槽" prop="col1.slot4">
          <el-input v-model="form.col1.slot4" />
        </el-form-item>
      </template>
    </p-form>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";
import { ElMessage } from 'element-plus'

const formRef = ref(null)
const form = reactive({
  slot1: '我是插槽1',
  slot2: '',
  slot3: '',
  col1: {
    slot4: '我是嵌套插槽4',
  }
})

const option = {
  showBtn: true,
  okText: '提交',
  cancelText: '取消',
  columns: [
    {
      type: 'slot',
      name: 'aaa',
    },
    {
      type: 'input',
      prop: 'input',
      label: '输入框',
    },
    {
      type: 'slot',
      name: 'bbb'
    },
    {
      type: 'row',
      children: [
        {
          type: 'input',
          label: 'RowInput',
          prop: 'row1',
          span: 6
        },
        {
          type: 'col',
          label: 'RowCol',
          prop: 'col1',
          span: 18,
          children: [
            {
              type: 'input',
              prop: 'a'
            },
            {
              type: 'slot',
              name: 'ccc'
            },
            {
              type: 'input',
              prop: 'b'
            },
          ]
        },
      ]
    },
  ],
  rules: {
    input: [
      { required: true, message: '必填' },
    ],
    'col1.a': [
      { required: true, message: '必填' },
    ],
    'col1.slot4': [
      { required: true, message: '必填' },
    ],
    slot1: [
      { required: true, message: '必填' },
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
  formRef.value.setFieldsValue((state) => ({
    ...state,
    input: '111',
    slot1: '222',
    slot2: '333',
    slot3: '444',
    row1: '555',
    col1: {
      a: '11',
      slot4: '22',
      b: '33',
    }
  }))
}

const getFieldsValue = () => {
  console.log(formRef.value.getFieldsValue())
}
</script>
