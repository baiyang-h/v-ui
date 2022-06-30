<template>
  <div>
    <el-row style="margin-bottom: 20px">
      <el-button type="primary" @click="onOk">提交</el-button>
      <el-button type="primary" @click="onReset">重置</el-button>
      <el-button type="primary" @click="onSet">设置值</el-button>
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

const formRef = ref(null)

const option = {
  columns: [
    {
      type: 'text',
      prop: 'text',
      label: '文本',
    },
    {
      type: 'input',
      prop: 'input',
      label: '输入框',
      attrs: {
        maxlength: 10,
        minlength: 1,
        'show-word-limit': true,
        placeholder: '请输入内容',
        clearable: true,
      }
    },
    {
      type: 'inputNumber',
      prop: 'inputNumber',
      label: '数字输入框',
      rules: [
        { required: true, message: '请输入数字', trigger: 'blur' },
      ]
    },
    {
      type: 'select',
      prop: 'select',
      label: '选择框',
      attrs: {
        options: [
          {
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }
        ]
      }
    },
    {
      type: 'radioGroup',
      prop: 'radioGroup',
      label: '单选',
      attrs: {
        options: [
          {
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }, {
            value: 'hangzhou',
            label: '杭州',
            disabled: true
          },
        ]
      }
    },
    {
      type: 'checkbox',
      prop: 'checkbox',
      label: '复选框',
    },
    {
      type: 'checkboxGroup',
      prop: 'checkboxGroup',
      label: '复选框组',
      attrs: {
        options: [
          {
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }, {
            value: 'HangZhou',
            label: '杭州',
            disabled: true
          },
        ]
      }
    },
    {
      type: 'rate',
      prop: 'rate',
      label: '评分',
    },
    {
      type: 'slider',
      prop: 'slider',
      label: '滑块',
    },
    {
      type: 'switch',
      prop: 'switch',
      label: '开关',
    },
    {
      type: 'time',
      prop: 'time',
      label: '时间选择器',
    },
    {
      type: 'date',
      prop: 'date',
      label: '日期选择器',
      attrs: {
        type: 'daterange'
      }
    },
    {
      type: 'selectTime',
      prop: 'selectTime',
      label: '时间选择',
    },
    {
      type: 'colorPicker',
      prop: 'colorPicker',
      label: '颜色选择器',
    },
    {
      type: 'cascader',
      prop: 'cascader',
      label: '级联选择器',
      attrs: {
        options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }]
      }
    },
  ],
  rules: {
    input: [
      { required: true, message: '成功', trigger: 'blur' },
      { min: 3, max: 5, message: '长度为3-5', trigger: 'blur' },
    ],
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
const onReset = () => {
  formRef.value.resetFields()
}
const onSet = () => {
  if(!formRef.value) return
  formRef.value.setFieldsValue({
    input: 'input',
    inputNumber: 3,
    select: 'Shanghai',
  })
}
</script>
