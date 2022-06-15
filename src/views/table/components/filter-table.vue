<template>
  <div class="box">
    <h2>筛选</h2>
    <p class="desc1">对表格进行筛选，可快速查找到自己想看的数据。</p>
    <p class="desc2">在列中设置 filters 和 filter-method 属性即可开启该列的筛选， filters 是一个数组，filter-method 是一个方法，它用于决定某些数据是否显示， 会传入三个参数：value, row 和 column。</p>
    <div>
      <div style="margin-bottom: 15px">
        <el-button @click="resetDateFilter">reset date filter</el-button>
        <el-button @click="clearFilter">reset all filters</el-button>
      </div>
      <p-table
        ref="tableRef"
        :data="tableData"
        :option="option"
      >
        <template #tag="scope">
          <el-tag
            :type="scope.row.tag === 'Home' ? '' : 'success'"
            disable-transitions
          >{{ scope.row.tag }}</el-tag>
        </template>
      </p-table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tableRef = ref()

const resetDateFilter = () => {
  tableRef.value.clearFilter(['date'])
}

const clearFilter = () => {
  tableRef.value.clearFilter()
}

const filterTag = (value, row) => {
  return row.tag === value
}

const filterHandler = (
    value,
    row,
    column
) => {
  const property = column['property']
  return row[property] === value
}

const option = {
  rowKey: 'date',
  columns: [
    {
      prop: 'date',
      label: 'date',
      columnKey: 'date',
      filters: [
        { text: '2016-05-01', value: '2016-05-01' },
        { text: '2016-05-02', value: '2016-05-02' },
        { text: '2016-05-03', value: '2016-05-03' },
        { text: '2016-05-04', value: '2016-05-04' },
      ],
      filterMethod: filterHandler
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
    {
      prop: 'tag',
      label: 'Tag',
      filters: [
        { text: 'Home', value: 'Home' },
        { text: 'Office', value: 'Office' },
      ],
      filterMethod: filterTag,
      filterPlacement: 'bottom-end',
      slot: true
    }
  ]
}
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Office',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Home',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Office',
  },
]
</script>
