<template>
  <div class="box">
    <div>
      <pack-table
        :data="tableData"
        :columns="columns"
      >
        <template #append>
          <div>21312</div>
        </template>
        <template #empty>
          <div>empty</div>
        </template>
        <template #operations>
          <el-button text size="small" @click="handleClick">删除</el-button>
          <el-button text size="small">编辑</el-button>
        </template>
      </pack-table>
    </div>
  </div>
</template>

<script setup>
const columns = [
  {
    prop: 'date',
    label: 'date',
    width: 150,
    fixed: true
  },
  {
    prop: 'name',
    label: 'name',
    width: 120,
  },
  {
    prop: 'state',
    label: 'state',
    width: 120,
  },
  {
    prop: 'city',
    label: 'city',
    width: 120,
  },
  {
    prop: 'address',
    label: 'address',
    width: 600,
  },
  {
    prop: 'zip',
    label: 'zip',
    width: 120,
  },
  {
    prop: 'tag',
    label: 'tag',
    width: 120,
  },
  {
    prop: 'operations',
    label: '操作',
    slot: true,
    width: 200,
    fixed: 'right'
  },
]
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
]
const handleClick = () => {
  console.log('click')
}
</script>
