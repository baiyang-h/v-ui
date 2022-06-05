<template>
  <div>
    <el-button @click="test">click</el-button>
    <pack-table
      ref="tableRef"
      :data="tableData"
      :columns="columns"
      :pagination="pagination"
      @page-current-change="onCurrentChange"
      @page-size-change="onSizeChange"
    >
      <template #empty>
        我是插槽，我没有数据啊
      </template>
      <template #date-header>
        我是 date 字段的自定义头部
      </template>
      <template #aaa="{ row, column, $index }">
        <el-button type="primary" @click="getSlot(row, column, $index)">点击</el-button>
      </template>
    </pack-table>
  </div>
</template>

<script setup>
import { ref, reactive, toRaw } from 'vue'

const tableRef = ref()
const pagination = reactive({
  currentPage: 1,
  pageSize: 20,
  total: 500,
})

const columns = [
  {
    prop: 'date',
    label: 'date',
    width: 250,
    headerSlot: true,
  },
  {
    prop: 'name',
    label: 'name',
    width: 180,
    formatter(row, column, cellValue, index) {
      return cellValue + index
    }
  },
  {
    prop: 'aaa',
    label: '插槽',
    slot: true
  },
  {
    prop: 'address',
    label: 'address',
    showOverflowTooltip: true
  },
]

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles234234324234234324234234324234',
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

const onCurrentChange = (page) => {
  pagination.currentPage = page
}

function onSizeChange(pageSize) {
  pagination.pageSize = pageSize
}

const test = () => {
  console.log(tableRef.value)
}

const getSlot = (row, column, $index) => {
  console.log(toRaw(row), column, $index)
}

</script>

<style scoped>

</style>
