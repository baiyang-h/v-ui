<template>
  <div class="box">
    <h2>展开行</h2>
    <p class="desc1">当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能。</p>
    <p class="desc2">通过设置 type="expand" 和 slot 可以开启展开行功能， el-table-column 的模板会被渲染成为展开行的内容，展开行可访问的属性与使用自定义列模板时的 slot 相同。</p>
    <div>
      <pack-table
        :data="tableData"
        :columns="columns"
      >
<!--        <template #expand="props">-->
<!--          <div m="4">-->
<!--            <p m="t-0 b-2">State: {{ props.row.state }}</p>-->
<!--            <p m="t-0 b-2">City: {{ props.row.city }}</p>-->
<!--            <p m="t-0 b-2">Address: {{ props.row.address }}</p>-->
<!--            <p m="t-0 b-2">Zip: {{ props.row.zip }}</p>-->
<!--          </div>-->
<!--        </template>-->
      </pack-table>
    </div>
  </div>
</template>

<script setup>
const columns = [
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
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
]
</script>
