## 基本

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

## 布局

### 布局一
```vue
<template>
  <el-form>
    <el-form-item prop="a1" label="Input">
      <el-input />
    </el-form-item>
    <el-form-item prop="a2" label="Input">
      <el-input />
    </el-form-item>
  </el-form>
</template>
```
对应如下代码
```js
const option1 = {
  showBtn: true,
  columns: [
    {
      type: 'input',
      label: 'Input',
      prop: 'a1'
    },
    {
      type: 'input',
      label: 'Input',
      prop: 'a2'
    },
  ],
  rules: {
    a1:  [
      { required: true, message: '必填' },
    ],
    a2:  [
      { required: true, message: '必填' },
    ],
  }
}
```

### 布局二

```vue
<template>
  <el-form>
    <el-form-item prop="a">
      <el-form-item prop="a.a1" label="Input">
        <el-input />
      </el-form-item>
      <el-form-item prop="a.a2" label="Input">
        <el-input />
      </el-form-item>
    </el-form-item>
  </el-form>
</template>
```
对应如下
```js
const option2 = {
  showBtn: true,
  columns: [
    {
      type: 'col',
      prop: 'a',
      children: [
        {
          type: 'input',
          label: 'Input',
          prop: 'a1'
        },
        {
          type: 'input',
          label: 'Input',
          prop: 'a2'
        },
      ]
    },
    {
      type: 'col',
      label: 'Col',
      prop: 'b',
      children: [
        {
          type: 'input',
          label: 'Input',
          prop: 'b1'
        },
        {
          type: 'input',
          label: 'Input',
          prop: 'b2'
        },
      ]
    }
  ],
  rules: {
    b: [
      { required: true, message: '必填' },
      {
        validator(rule, value, callback) {
          if (!value) return callback(new Error('必填'))
          if(value.b1 && value.b2) {
            callback()
          } else {
            callback(new Error('必填'))
          }
        }
      }
    ],
    'a.a1':  [
      { required: true, message: '必填' },
    ],
    'a.a2':  [
      { required: true, message: '必填' },
    ],
  }
}
```

### 布局三

```vue
<template>
  <el-form>
    <el-row>
      <el-col :span="12">
        <el-form-item prop="a1" label="Input"></el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item prop="a2" label="Input"></el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <el-form-item prop="c1" label="Input"></el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item prop="c2" label="Input"></el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item prop="c3" label="Input"></el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>
```
对应代码
```js
const option3 = {
  showBtn: true,
  columns: [
    {
      type: 'row',
      children: [
        {
          type: 'input',
          label: 'Input',
          prop: 'a1'
        },
        {
          type: 'input',
          label: 'Input',
          prop: 'a2',
        }
      ]
    },
    {
      type: 'row',
      children: [
        {
          type: 'input',
          label: 'Input',
          prop: 'c1',
          span: 6
        },
        {
          type: 'input',
          label: 'Input',
          prop: 'c2',
          span: 6
        },
        {
          type: 'input',
          label: 'Input',
          prop: 'c3',
          span: 12
        },
      ]
    },
  ],
  rules: {
    z1: [
      { required: true, message: '必填' },
    ],
    a1: [
      { required: true, message: '必填' },
    ],
    a2: [
      { required: true, message: '必填' },
    ],
    b1: [
      { required: true, message: '必填' },
    ],
    b2: [
      { required: true, message: '必填' },
    ],
    b3: [
      { required: true, message: '必填' },
    ],
  }
}
```

## 默认按钮

除了在外部自定义按钮，如果想要显示配置好的按钮，存在两种方式。 
1. `option.showBtn = true` 的情况下会显示按钮
2. 使用插槽外部自定义按钮 `#button`
3. 直接在组件底部写按钮

方式一
```vue
<template>
  <p-form :option="option" />
</template>

<script setup>
const option = {
  showBtn: true,
  okText: '自定义按钮文本确认',
  cancelText: '自定义按钮文本取消',
  columns: []
}
</script>
```

方式二
```vue
<template>
  <p-form :option="option">
    <template #button>
      <el-button type="primary">确认</el-button>
      <el-button>取消</el-button>
    </template>
  </p-form>
</template>
```

方式三
```vue
<template>
  <p-form :option="option" />
  <div>
    <el-button type="primary">确认</el-button>
    <el-button>取消</el-button>
  </div>
</template>
```

### Form 插槽
| 插槽名 | 说明 |
| ---- | ---- |
| button    | 如果想要自定义按钮 |

### Option

| 属性 | 说明 |
| ---- | ---- |
| columns    | 表单配置 |
| rules    | 表单规则 |
| showBtn    | 是否显示表单按钮 |
| okText    | 当显示表单按钮时（确认） |
| cancelText    | 当显示表单按钮时（取消） |


### Columns

| 属性 | 说明 |
| ---- | ---- |
| type    | 表单控件类型, 类型说明如下 |
| label    |  标签文本  |
| prop    |  model 的键名  |
| attrs    |  表单控件的属性  |

### Form 事件

| 事件名称 | 说明 |
| ---- | ---- |
| validate    | 任一表单项被校验后触发 |
| onOk    | 确定按钮 |
| onCancel    | 取消按钮 |

### Form 方法

| 方法名 | 说明 |
| ---- | ---- |
| validate    | 对整个表单的内容进行验证。 接收一个回调函数，或返回 Promise |
| validateField    | 验证具体的某个字段 |
| resetFields    | 重置该表单项，将其值重置为初始值，并移除校验结果 |
| scrollToField    | 滚动到指定的字段 |
| clearValidate    | 清理某个字段的表单验证信息 |
| setFieldsValue    | 设置表单的值 |
| getFieldsValue    | 获取一组字段名对应的值，会按照对应结构返回。默认返回现存字段值，当调用 getFieldsValue() 时返回所有值， getFieldsValue([key1, key2]) 多个值 |
| getFieldValue    | 获取对应字段名的值 |

### Type 表单类型

| 属性 | 说明 |
| ---- | ---- |
| row    |  |
| col    |    |
| text    |    |
| input    |    |
| inputNumber    |    |
| select    |    |
| radioGroup    |    |
| checkbox    |    |
| checkboxGroup    |    |
| rate    |    |
| slider    |    |
| switch    |    |
| time    |    |
| date    |    |
| selectTime    |    |
| colorPicker    |    |
| cascader    |    |
| custom    |    |


