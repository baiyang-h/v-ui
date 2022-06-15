<template>
  <div class="box">
    <h2>单行</h2>
    <p class="desc1">选择单行数据时使用色块表示。</p>
    <p class="desc2">Table 组件提供了单选的支持， 只需要配置 highlight-current-row 属性即可实现单选。 之后由 current-change 事件来管理选中时触发的事件，它会传入 currentRow，oldCurrentRow。 如果需要显示索引，可以增加一列 el-table-column，设置 type 属性为 index 即可显示从 1 开始的索引号。</p>
    <div>
      <p-table
        ref="singleTableRef"
        :data="tableData"
        :option="option"
        @current-change="handleCurrentChange"
      />
      <div style="margin-top: 20px">
        <el-button @click="setCurrent(tableData[1])">选择第二行</el-button>
        <el-button @click="setCurrent()">清空</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentRow = ref()
const singleTableRef = ref()

const option = {
  highlightCurrentRow: true,
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

const setCurrent = (row) => {
  singleTableRef.value.setCurrentRow(row)
}

const handleCurrentChange = (val) => {
  currentRow.value = val
}

</script>
