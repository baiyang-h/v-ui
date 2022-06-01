## 属性

|  属性   | 说明  | 类型  |
|  ----  | ---- | ---- |
| data  | 表格数据 | array |
| columns  | 列表配置 | array |
| pagination  | 分页配置，设为 false 时不展示和进行分页 | object / null、undefined、false |

## 事件

|  事件名   | 说明  | 参数 |
|  ----  | ----  | ---- |
| page-current-change  | 分页 current-change 改变时触发 | 新当前页|
| page-size-change  | 分页 pageSize 改变时触发 | 新每页条数 |


## 插槽部分

```vue
<script setup>
const columns = [
  {
    prop: 'date',
    label: 'date',
    width: 250,
    // 自定义头部插槽 , 如果要自定义头部插槽的话，1. 此处 headerSlot: true， 2. 插槽的名字要改字段 `${prop}-header` 例如 date-header
    headerSlot: true,   
  },
  {
    prop: 'name',
    label: 'name',
    width: 180,
  },
  {
    prop: 'aaa',
    label: '插槽',
    // 插槽部分，自定义内容插槽
    slot: true      
  },
  {
    prop: 'address',
    label: 'address',
  },
]
</script>

<template>
  <pack-table
      :data="tableData"
      :columns="columns"
  >
    <template #date-header>
      我是 date 字段的自定义头部, 注意 prop-header 的格式 prop 为 item 中的 prop
    </template>
    <template #aaa="{ row, column, $index }">
      <el-button type="primary" @click="getSlot(row, column, $index)">我是内容插槽</el-button>
    </template>
  </pack-table>
</template>
```