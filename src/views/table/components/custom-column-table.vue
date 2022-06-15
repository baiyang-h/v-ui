<template>
  <div class="box">
    <h2>自定义列模板</h2>
    <p class="desc1">自定义列的显示内容，可组合其他组件使用。</p>
    <p class="desc2">通过在配置项中设置 slot 然后再组件中写入插槽, 通过作用域插槽获取到 row, column, $index 和 store（table 内部的状态管理）的数据，用法参考 demo </p>
    <div>
      <p-table
        :data="tableData"
        :option="option"
      >
        <template #date="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </div>
        </template>
        <template #name="scope">
          <el-popover effect="light" trigger="hover" placement="top" width="auto">
            <template #default>
              <div>name: {{ scope.row.name }}</div>
              <div>address: {{ scope.row.address }}</div>
            </template>
            <template #reference>
              <el-tag>{{ scope.row.name }}</el-tag>
            </template>
          </el-popover>
        </template>
        <template #operations="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
          >Edit</el-button
          >
          <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
          >Delete</el-button>
        </template>
      </p-table>
    </div>
  </div>
</template>

<script setup>
import { Timer } from '@element-plus/icons-vue'

const option = {
  columns: [
    {
      prop: 'date',
      label: 'date',
      slot: true
    },
    {
      prop: 'name',
      label: 'name',
      slot: true
    },
    {
      prop: 'operations',
      label: 'operations',
      slot: true
    },
  ]
}
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

const handleEdit = (index, row) => {
  console.log(index, row)
}
const handleDelete = (index, row) => {
  console.log(index, row)
}

</script>
