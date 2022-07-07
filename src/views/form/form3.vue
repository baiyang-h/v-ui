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
          <el-form-item label="插槽2-1" prop="slot21">
            <el-input v-model="form.slot21" />
          </el-form-item>
          <el-form-item label="插槽2-2" prop="slot22">
            <el-input v-model="form.slot22" />
          </el-form-item>
        </el-form-item>
      </template>
    </p-form>
  </div>
</template>

<script setup>
import {ref} from "vue";
import { ElMessage } from 'element-plus'

const formRef = ref(null)
const form = ref({
  slot1: '我是插槽1',
  slot21: '',
  slot22: '',
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
          prop: 'row1'
        },
        {
          type: 'col',
          label: 'RowCol',
          prop: 'col1',
          children: [
            {
              type: 'input',
              prop: 'a'
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
  // 这里因为外部直接赋值的原因,导致内部不知道form 直接被改变了,所以 input 无效
  // 而直接使用 form.input 这种方式去修改却可以,是因为引用传值的原因
  // form.value = {
  //   ...form.value,
  //   input: '111',
  //   slot1: '222',
  //   slot21: '333',
  //   slot22: '444',
  // }
}

const getFieldsValue = () => {

}
</script>
