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
