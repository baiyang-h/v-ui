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
import {ref} from "vue";
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
      type: 'text',
      label: '文本',
      prop: 'text',
      attrs: {
        color: 'red'
      }
    },
    {
      type: 'input',
      prop: 'input',
      label: '输入框',
      attrs: {
        reg: /\d/,
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
        { required: true, message: '请输入数字' },
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
        type: 'daterange',
        startPlaceholder: '开始',
        endPlaceholder: '结束',
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
            }]
          }]
        }]
      }
    },
    {
      type: 'row',
      children: [
        {
          type: 'input',
          label: 'RowInput',
          prop: 'a1'
        },
        {
          type: 'select',
          label: 'RowSelect',
          prop: 'a2',
          attrs: {
            options: [
              { value: 1, label: 'One' },
              { value: 2, label: 'Two' },
            ]
          }
        }
      ]
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
    {
      type: 'col',
      label: 'Col',
      prop: 'col2',
      children: [
        {
          type: 'input',
          prop: 'a'
        },
        {
          type: 'input',
          prop: 'b'
        }
      ]
    },
    {
      type: 'custom',
      prop: 'custom1',
      label: '自定义1',
      component: Custom1
    },
    {
      type: 'custom',
      prop: 'custom2',
      label: '自定义2',
      component: Custom2
    }
  ],
  rules: {
    input: [
      { required: true, message: '必填' },
    ],
    row1: [
      { required: true, message: '必填' },
    ],
    'col1.a': [
      { required: true, message: '必填' },
    ],
    'col2.a': [
      { required: true, message: '必填' },
    ],
    // 也可以直接col进行自定义验证
    // 'col2': [
    //   {
    //     validator(rule, value, callback) { callback() }
    //   }
    // ],
    custom1: [
      { required: true, message: '必填' },
    ],
    custom2: [
      {
        validator(rule, value, callback) {
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
