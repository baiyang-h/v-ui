<template>
  <div class="box">
    <h2>序号</h2>
    <p class="desc1">1. 可以设置 option.index 在表格头部默认增加序号, 序号会根据分页页码自动生成 </p>
    <p class="desc2">2. 自定义 type=index 列的行号, 然后通过 slot 插槽方式自定义序号</p>
    <p class="desc3">3. 自定义 type=index 列的行号, 然后通过 index 传入一个自定义方法来作为索引</p>
    <div>
      <p-table
        :data="tableData"
        :option="option"
        :pagination="pagination"
        @page-current-change="onPageCurrentChange"
        @page-size-change="onPageSizeChange"
        @page-prev-click="prevClick"
        @page-next-click="nextClick"
      />
      <br />
      <p-table
        :data="tableData"
        :option="option2"
        :pagination="pagination"
        @page-current-change="onPageCurrentChange"
        @page-size-change="onPageSizeChange"
      >
        <template #index="{ $index, row }" >
          {{ indexMethod($index) }}
        </template>
      </p-table>
      <br />
      <p-table
        :data="tableData"
        :option="option3"
        :pagination="pagination"
        @page-current-change="onPageCurrentChange"
        @page-size-change="onPageSizeChange"
      />
    </div>
  </div>
</template>

<script setup>
import {reactive, ref, onMounted} from "vue";

const pagination = reactive({
  layout: 'total, prev, pager, next, jumper',
  currentPage: 1,
  pageSize: 20,
  total: 5000,
})
const tableData = ref([])

const onPageCurrentChange = (page) => {
  console.log('page', page)
  pagination.currentPage = page
  tableData.value = produceTableData()
}

const onPageSizeChange = (pageSize) => {
  console.log('pageSize', pageSize)
  pagination.pageSize = pageSize
  tableData.value = produceTableData()
}

const prevClick = (val) => {
  console.log('prev', val)
}

const nextClick = (val) => {
  console.log('next', val)
}

const produceTableData = () => {
  let arr = []
  for (let i = 0; i < 20; i++) {
    arr.push({
      date: `2016-05-${i + 1}`,
      name: Math.random().toString(36).substr(2),
      address: `No. 189, ${Math.random().toString(36).substr(2)}`
    })
  }
  return arr
}

const indexMethod = (index) => {
  return (
      index +
      1 +
      ((pagination.currentPage || 1) - 1) *
      (pagination.pageSize || 20)
  );
}

const option = {
  height: 300,
  index: true,
  columns: [
    {
      prop: 'date',
      label: 'date'
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
const option2 = {
  height: 300,
  columns: [
    {
      prop: 'index',
      label: '序号',
      width: 60,
      slot: true,
    },
    {
      prop: 'date',
      label: 'date'
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
const option3 = {
  height: 300,
  columns: [
    {
      type: 'index',
      label: '序号',
      width: 60,
      index: indexMethod
    },
    {
      prop: 'date',
      label: 'date'
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
onMounted(() => {
  tableData.value = produceTableData()
})
</script>
