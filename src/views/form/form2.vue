<template>
  <div>
    <p-form ref="formRef1" :option="option1" @onOk="onOk(formRef1)" @onCancel="onCancel(formRef1)" />

    <hr style="height:1px;border:none;border-top:1px dashed #ccc; margin: 40px 0" />

    <p-form ref="formRef2" :option="option2" @onOk="onOk(formRef2)" @onCancel="onCancel(formRef2)" />

    <hr style="height:1px;border:none;border-top:1px dashed #ccc; margin: 40px 0" />

    <p-form
      ref="formRef3"
      :option="option3"
      @onOk="onOk(formRef3)"
      @onCancel="onCancel(formRef3)"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ElMessage } from 'element-plus'

const formRef1 = ref(null)
const formRef2 = ref(null)
const formRef3 = ref(null)

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

// 当我 grid 这个对象设置了 prop，则会生成对象，children下的子集就为对象的属性
// 当我不设置 prop 的时候，则根据父级寻找生成对象，如无就是各自子集的属性
/*
 第一个 ：{a: {a1: undefined, a2: undefined}}
 第二个： {a1: undefined, a2: undefined}
 */
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
    },
  ],
  rules: {
    'a.a1':  [
      { required: true, message: '必填' },
    ],
    'a.a2':  [
      { required: true, message: '必填' },
    ],
  }
}

const option3 = {
  showBtn: true,
  columns: [
    {
      type: 'input',
      label: 'Input',
      prop: 'z1'
    },
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
          prop: 'b1',
        },
        {
          type: 'input',
          label: 'Input',
          prop: 'b2',
        },
        {
          type: 'input',
          label: 'Input',
          prop: 'b3',
        },
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

const onOk = (formRef) => {
  if(!formRef) return
  formRef.validate((valid) => {
    if(valid) {
      console.log(formRef.getFieldsValue())
      ElMessage({
        message: formRef.getFieldsValue(),
        type: 'success',
      })
    }
  })
}

const onCancel = (formRef) => {
  if(!formRef) return
  formRef.resetFields()
}

</script>
