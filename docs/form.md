## 基本

```vue
<template>
  <p-form :option="option" />
</template>

<script setup>
import { reactive } from 'vue'

const option = reactive({
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
      },
      listeners: {
        blur(e) {
          console.log(e)
        }
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
          type: 'grid',
          label: 'RowGrid',
          prop: 'grid1',
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
      type: 'grid',
      label: 'Grid',
      prop: 'grid2',
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
      component: markRaw(Custom1)
    },
    {
      type: 'custom',
      prop: 'custom2',
      label: '自定义2',
      component: markRaw(Custom2)
    }
  ],
  rules: {
    input: [
      { required: true, message: '必填' },
    ],
    row1: [
      { required: true, message: '必填' },
    ],
    'grid1.a': [
      { required: true, message: '必填' },
    ],
    'grid2.a': [
      { required: true, message: '必填' },
    ],
    // 也可以直接col进行自定义验证
    // 'grid2': [
    //   {
    //     validator(rule, value, callback) { callback() }
    //   }
    // ],
    custom1: [
      { required: true, message: '必填' },
    ],
    custom2: [
      { required: true, message: '必填' },
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
})
</script>

```

## 表单控件事件

如果相对单个的表单增加组件事件，可以在配置中增加 `listeners` 事件配置项

```vue
<script setup>
const option = {
  columns: [
    {
      type: 'input',
      prop: 'input',
      label: '输入框',
      listeners: {
        blur(e) {
          console.log(e)
        }
      }
    },
    {
      type: 'custom',
      prop: 'custom',
      label: '自定义',
      listeners: {
        // 可以自定义事件，但是在表单组件内部必须注册该事件才会有效
        aaa(v) {},
        bbb(v) {},
      }
    }
  ]
}
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

#### grid上存在prop
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
      type: 'grid',
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
      type: 'grid',
      label: 'Grid',
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
#### grid上不存在prop
也可以选择 `grid` 对象上不增加 `prop`，那么就直接进行子集取值，跳过该对象
```vue
<template>
  <el-form>
    <el-form-item>
      <el-form-item prop="a1" label="Input">
        <el-input />
      </el-form-item>
      <el-form-item prop="a2" label="Input">
        <el-input />
      </el-form-item>
    </el-form-item>
  </el-form>
</template>
```
对应如下代码
```js
const option1 = {
  columns: [
    {
      type: 'grid',
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

## 插槽

对于有些表复杂的表单形式，我们需要自定义表单，此时我们可以选择插槽的方式，主要有三点:

1. 在 options 中设置`{ type: 'slot', name: '插槽名' }`
2. 在 `template` 中写上相应的自定义插槽
3. 在表单组件上绑定 `v-model=form` 在 `form` 中写上表单绑定的参数

```vue
<template>
  <p-form
    v-model="form"
    :option="option"
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
      <el-form-item label="嵌套插槽" prop="grid1.slot4">
        <el-input v-model="form.grid1.slot4" />
      </el-form-item>
    </template>
  </p-form>
</template>

<script setup>
import {ref} from "vue";

const formRef = ref(null)
// 3. 绑定相应表单的属性， 对应上面设置的插槽部分
const form = ref({
  slot1: '我是插槽1',
  slot2: '',
  slot3: '',
  grid1: {
    slot4: '我是嵌套插槽4',
  }
})

const option = {
  columns: [
    // 1. option 中设置插槽
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
          type: 'grid',
          label: 'RowGrid',
          prop: 'grid1',
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
    'grid1.a': [
      { required: true, message: '必填' },
    ],
    'grid1.slot4': [
      { required: true, message: '必填' },
    ],
    slot1: [
      { required: true, message: '必填' },
    ]
  }
}

const setFieldsValue = () => {
  formRef.value.setFieldsValue((state) => ({
    ...state,
    input: '111',
    slot1: '222',
    slot2: '333',
    slot3: '444',
    row1: '555',
    grid1: {
      a: '11',
      slot4: '22',
      b: '33',
    }
  }))
}
</script>
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

## Form 插槽
| 插槽名 | 说明 |
| ---- | ---- |
| button    | 如果想要自定义按钮 |

## Option

| 属性 | 说明 |
| ---- | ---- |
| columns    | 表单配置 |
| rules    | 表单规则 |
| showBtn    | 是否显示表单按钮 |
| showCancelBtn    | 是否显示取消按钮 |
| okText    | 当显示表单按钮时（确认） |
| cancelText    | 当显示表单按钮时（取消） |
| initialValues  | 表单默认值，只有初始化以及重置时生效 |

## Columns

| 属性 | 说明 |
| ---- | ---- |
| type    | 表单控件类型, 类型说明如下 |
| label    |  标签文本  |
| prop    |  model 的键名  |
| attrs    |  表单控件的属性  |
| defaultValue    |  表单默认值  |
| children    |  只有 type 为 row 或 grid 的时候才有  |
| listeners    |  表单控件的事件可以设置在 listeners 对象中  |

### Form 事件

| 事件名称 | 说明 |
| ---- | ---- |
| validate    | 任一表单项被校验后触发 |
| onOk    | 确定按钮 |
| onCancel    | 取消按钮 |

### Form 方法

| 方法名 | 说明 |
| ---- | ---- |
| validate    | 对整个表单的内容进行验证。 接收一个回调函数，或返回 Promise
| validateField    | 验证具体的某个字段
| resetFields    | 重置该表单项，将其值重置为初始值，并移除校验结果。方法中可传入一个数组，数组中可以是需要重置的prop，对于类型是grid的需要嵌套的prop，如 a.b.c
| scrollToField    | 滚动到指定的字段
| clearValidate    | 清理某个字段的表单验证信息
| setFieldsValue    | 设置表单的值
| getFieldsValue    | 获取一组字段名对应的值，会按照对应结构返回。默认返回现存字段值，当调用 getFieldsValue() 时返回所有值， getFieldsValue([key1, key2]) 多个值
| getFieldValue    | 获取对应字段名的值

### Type 表单类型

| 属性 | 说明 |
| ---- | ---- |
| row    | 栅格的形式，列在 children 中定义 |
| grid    |  嵌套表单 form.a.b，嵌套的表单在 children 中定义  |
| text    |  文本  |
| input    |  输入框  |
| inputNumber    |  数字输入框  |
| select    |  选择框  |
| radioGroup    |  单选组  |
| checkbox    |  复选框  |
| checkboxGroup    |  复选框组  |
| rate    |  评分  |
| slider    |  滑块  |
| switch    |  开关  |
| time    |  时间选择器  |
| date    |  日期选择器  |
| selectTime    |  时间下拉选择器  |
| colorPicker    |  颜色选择器  |
| cascader    |  级联  |
| custom    |  自定义组件  |


