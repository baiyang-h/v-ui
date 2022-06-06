<template>
  <div class="box">
    <h2>带状态表格</h2>
    <p class="desc1">可将表格内容 highlight 显示，方便区分「成功、信息、警告、危险」等内容。</p>
    <p class="desc2">可以通过指定 Table 组件的 row-class-name 属性来为 Table 中的某一行添加 class， 表明该行处于某种状态。</p>
    <div>
      <pack-table
        :data="tableData"
        :columns="columns"
        :row-class-name="tableRowClassName"
      />
    </div>
  </div>
</template>

<script setup>
const columns = [
  {
    prop: 'date',
    label: 'date',
  },
  {
    prop: 'name',
    label: 'name'
  },
  {
    prop: 'address',
    label: 'address'
  },
]
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
const tableRowClassName = ({ row, rowIndex }) => {
  if (rowIndex === 1) {
    return 'warning-row'
  } else if (rowIndex === 3) {
    return 'success-row'
  }
  return ''
}
</script>

<style scoped>
:deep(.el-table) .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
:deep(.el-table) .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>
