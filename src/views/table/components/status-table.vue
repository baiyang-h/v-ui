<template>
  <div class="box">
    <h2>带边框表格</h2>
    <p class="desc2">默认情况下，Table 组件是不具有竖直方向的边框的， 如果需要，可以使用 border 属性，把该属性设置为 true 即可启用。</p>
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
