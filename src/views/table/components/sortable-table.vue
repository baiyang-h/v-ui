<template>
  <div class="box">
    <h2>排序</h2>
    <p class="desc1">对表格进行排序，可快速查找或对比数据。</p>
    <p class="desc2">在列中设置 sortable 属性即可实现以该列为基准的排序， 接受一个 Boolean，默认为 false。 可以通过 Table 的 default-sort 属性设置默认的排序列和排序顺序。 可以使用 sort-method 或者 sort-by 使用自定义的排序规则。 如果需要后端排序，需将 sortable 设置为 custom，同时在 Table 上监听 sort-change 事件， 在事件回调中可以获取当前排序的字段名和排序顺序，从而向接口请求排序后的表格数据。 在本例中，我们还使用了 formatter 属性，它用于格式化指定列的值， 接受一个 Function，会传入两个参数：row 和 column， 可以根据自己的需求进行处理。</p>
    <div>
      <pack-table
        :default-sort="{ prop: 'date', order: 'descending' }"
        :data="tableData"
        :columns="columns"
        @sort-change="sortChange"
      />
    </div>
  </div>
</template>

<script setup>
const columns = [
  {
    prop: 'date',
    label: 'date',
    sortable: true
  },
  {
    prop: 'name',
    label: 'name'
  },
  {
    prop: 'address',
    label: 'address',
    formatter(row) {
      return row.address
    }
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

const sortChange = ({ column, prop, order }) => {
  console.log({ column, prop, order })
}
</script>
