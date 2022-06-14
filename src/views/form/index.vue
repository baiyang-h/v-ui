<template>
  <div>
    <pack-form :option="option" />
  </div>
</template>

<script setup>
import { reactive } from "vue";

const option = {
  columns: [
    {
      type: 'text',
      prop: 'text',
      label: '文本',
    },
    {
      type: 'input',
      prop: 'name',
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
      type: 'radio',
      prop: 'radio',
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
      type: 'selectV2',
      prop: 'selectV2',
      label: '虚拟化选择器',
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
  // rules: {
  //   name: [
  //     { required: true, message: 'Please input Activity name', trigger: 'blur' },
  //     { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  //   ],
  //   region: [
  //     {
  //       required: true,
  //       message: 'Please select Activity zone',
  //       trigger: 'change',
  //     },
  //   ],
  // }
}
</script>