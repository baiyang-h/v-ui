## 属性

|  属性   | 说明  | 类型  |
|  ----  | ---- | ---- |
| data  | 表格数据 | array |
| option  | 表格配置 | object |
| pagination  | 分页配置，设为 false 时不展示和进行分页 | object / null、undefined、false |

## 事件

新增如下事件， 其他具体方法可查看 element-ui

|  事件名   | 说明  | 参数 |
|  ----  | ----  | ---- |
| page-current-change  | 分页 current-change 改变时触发 | 新当前页|
| page-size-change  | 分页 pageSize 改变时触发 | 新每页条数 |

## Option

新增属性如下，其他具体属性可查看 element-ui table 表格部分

|  属性   | 说明  | 类型  |
|  ----  | ---- | ---- |
| columns  | el-table-column 上的属性配置 | object |
| expand  | 对标 Table-column 的 type 类型，在 Table 表格中头部列增加类型，（折叠） | boolean |
| selection  | 对标 Table-column 的 type 类型，在 Table 表格中头部列增加类型，（复选框） | boolean |
| index  | 对标 Table-column 的 type 类型，在 Table 表格中头部列增加类型，（索引） | boolean |
| indexLabel  | 索引表头标题 | string |
| expandFixed  | 折叠列是否固定 | true / 'left' / 'right' |
| selectionFixed  | 复选框是否固定 | boolean |
| indexFixed  | 索引是否固定 | boolean |
| expandWidth  | 折叠列宽度 | boolean |
| selectionWidth  | 复选框列宽度 | boolean |
| indexWidth  | 索引列宽度 | boolean |

## Pagination

主要属性如下，其他具体属性可查看 element-ui Pagination 分页

|  属性   | 说明  | 类型  | 默认值 |
|  ----  | ---- | ---- | ---- |
| currentPage  | 当前页数 | number | 1 |
| pageSize  | 每页显示条目个数 | number | 20 |
| total  | 总条目数 | number | - |

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
  <p-table
      :data="tableData"
      :columns="columns"
  >
    <template #date-header>
      我是 date 字段的自定义头部, 注意 prop-header 的格式 prop 为 item 中的 prop
    </template>
    <template #aaa="{ row, column, $index }">
      <el-button type="primary" @click="getSlot(row, column, $index)">我是内容插槽</el-button>
    </template>
  </p-table>
</template>
```