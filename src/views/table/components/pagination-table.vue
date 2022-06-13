<template>
  <div class="box">
    <h2>分页</h2>
    <p class="desc1">分页表格</p>
    <p class="desc2">在组件上增加 pagination 属性来设置分页</p>
    <div>
      <pack-table
        :data="tableData"
        :option="option"
        :pagination="pagination"
        @page-current-change="onPageCurrentChange"
        @page-size-change="onPageSizeChange"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";

const pagination = reactive({
  // layout: 'total, prev, pager, next, jumper',
  currentPage: 1,
  pageSize: 20,
  total: 5000
})
const tableData = ref([])

const onPageCurrentChange = (page) => {
  console.log(page)
  pagination.currentPage = page
  tableData.value = produceTableData()
}

const onPageSizeChange = (pageSize) => {
  console.log(pageSize)
  pagination.pageSize = pageSize
  tableData.value = produceTableData()
}

const produceTableData = () => {
  let arr = []
  for(let i=0; i<20; i++) {
    arr.push({
      date: `2016-05-${i+1}`,
      name: Math.random().toString(36).substr(2),
      address: `No. 189, ${Math.random().toString(36).substr(2)}`
    })
  }
  return arr
}

const option = {
  height: 500,
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
onMounted(() => {
  tableData.value = produceTableData()
})
</script>
