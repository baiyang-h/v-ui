```vue
<template>
  <p-form :option="option" />
</template>

<script setup>
import { reactive } from 'vue'

const option = reactive({
  columns: [
    {
      type: 'input',
      label: '输入框',
      prop: 'input',
      attrs: {
        // reg: /^\d*$/g,
        maxlength: 10,
        minlength: 1,
        'show-word-limit': true,
        'showWordLimit': true,
        placeholder: '请输入内容',
        clearable: true,
        // 'show-password': true,
        // disabled: true,
        // size: 'mini',
        // autofocus: true,
        label: 'aaaa',
      },
      listeners: {
        blur(e) {
          console.log(this, e.target)
        },
        clear: () => {
          console.log('clear', this)
        }
      }
    },
    {
      type: 'inputNumber',
      label: '数字框',
      prop: 'inputNumber',
    },
    {
      type: 'select',
      label: '选择框',
      prop: 'select',
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
      type: 'radio',
      label: '单选',
      prop: 'radio',
      attrs: {
        options: [
          {
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }, {
            value: 'hanghzou',
            label: '杭州',
            disabled: true
          },
        ]
      }
    },
    {
      type: 'checkbox',
      label: '复选框',
      prop: 'checkbox',
    },
    {
      type: 'checkboxGroup',
      label: '复选框组',
      prop: 'checkboxGroup',
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
      type: 'switch',
      label: 'Switch',
      prop: 'switch'
    },
    {
      type: 'time',
      label: '时间选择器',
      prop: 'time'
    },
    {
      type: 'date',
      label: '日期选择器',
      prop: 'date',
      attrs: {
        type: 'daterange'
      }
    },
    {
      type: 'cascader',
      label: '级联选择器',
      prop: 'cascader',
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
    text: [
      { required: true, message: '请输入活动名称' },
      { min: 3, max: 5, message: '长度在 3 到 5 个字符' }
    ],
    text2: [
        
      { required: true, message: '必填', trigger: 'blur' },
    ],
    aaa: [
      { required: true, message: '必填' },
    ],
  }
})
</script>
```

### Option
| 属性 | 说明 |
| ---- | ---- |
| columns    | 表单配置 |
| rules    | 表单规则 |


### Columns
| 属性 | 说明 |
| ---- | ---- |
| type    | 表单控件类型 |
| label    |  标签文本  |
| prop    |  model 的键名  |
| attrs    |  表单控件的属性  |

### Form 事件
| 事件名称 | 说明 |
| ---- | ---- |
| validate    | 任一表单项被校验后触发 |
| onOk    | 确定按钮 |
| onCancel    | 取消按钮 |
