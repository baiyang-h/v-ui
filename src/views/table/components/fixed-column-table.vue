<template>
  <div class="box">
    <h2>固定列</h2>
    <p class="desc1">横向内容过多时，可选择固定列。</p>
    <p class="desc2">固定列需要使用 fixed 属性，它接受 Boolean 值 如果为 true, 列将被左侧固定. 它还接受传入字符串，left 或 right，表示左边固定还是右边固定。</p>
    <div>
      <pack-table
        :data="tableData"
        :option="option"
      >
        <template #operations>
          <el-button text size="small" @click="handleClick">删除</el-button>
          <el-button text size="small">编辑</el-button>
        </template>
      </pack-table>
    </div>
  </div>
</template>

<script setup>
const option = {
  columns: [
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
}
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
