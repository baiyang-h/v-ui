<template>
  <div class="box">
    <h2>带斑马纹表格</h2>
    <p class="desc1">使用带斑马纹的表格，可以更容易区分出不同行的数据。</p>
    <p class="desc2">stripe 属性可以创建带斑马纹的表格。 如果 true, 表格将会带有斑马纹。</p>
    <div>
      <p-table
        :data="tableData"
        :option="option"
      />
    </div>
  </div>
</template>

<script setup>
const option = {
  stripe: true,
  columns: [
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
</script>
