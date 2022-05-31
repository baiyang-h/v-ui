<template>
  <div>
    <a-table
      :data="tableData"
      :columns="columns"
      border
      stripe
    >

    </a-table>
  </div>
</template>

<script setup>

const columns = [
  {
    prop: 'date',
    label: 'date',
    width: 180
  },
  {
    prop: 'name',
    label: 'name',
    width: 180
  },
  {
    prop: 'address',
    label: 'address',
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
</script>

<style scoped>

</style>