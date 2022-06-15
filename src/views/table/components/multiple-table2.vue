<template>
  <div class="box">
    <h2>多选2</h2>
    <p class="desc1">你也可以选择多行。</p>
    <p class="desc2">设置 option.selection 为 true, 就可以选择多行</p>
    <div>
      <p-table
        ref="multipleTableRef"
        :data="tableData"
        :option="option"
        @selection-change="handleSelectionChange"
      />
      <div style="margin-top: 20px">
        <el-button @click="toggleSelection([tableData[1], tableData[2]])">
          Toggle selection status of second and third rows
        </el-button
        >
        <el-button @click="toggleSelection()">
          Clear selection
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const multipleTableRef = ref()
const multipleSelection = ref([])

const toggleSelection = (rows) => {
  if (rows) {
    rows.forEach((row) => {
      multipleTableRef.value.toggleRowSelection(row, undefined)
    })
  } else {
    multipleTableRef.value.clearSelection()
  }
}
const handleSelectionChange = (val) => {
  multipleSelection.value = val
}

const option = {
  columns: [
    {
      type: 'selection'
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
