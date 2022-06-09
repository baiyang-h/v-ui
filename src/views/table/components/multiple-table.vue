<template>
  <div class="box">
    <h2>多选</h2>
    <p class="desc1">你也可以选择多行。</p>
    <p class="desc2">实现多选非常简单: 手动添加一个 el-table-column，设 type 属性为 selection 即可； 除了多个选项，此示例还使用 show-overflow-tooltip：默认， 如果内容过长，它会分成多行。 若需要单行显示可以使用 show-overflow-tooltip 属性，它接受一个 Boolean， 为 true 时多余的内容会在 hover 时以 tooltip 的形式显示出来。</p>
    <div>
      <pack-table
        ref="multipleTableRef"
        :data="tableData"
        :columns="columns"
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

const columns = [
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
