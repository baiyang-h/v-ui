<template>
  <div class="box">
    <h2>自定义表头</h2>
    <p class="desc1">表头支持自定义。</p>
    <p class="desc2">通过在相应的配置项中设置 headerSlot: true 来自定义表头, 注意:在插槽中要使用 propName-header 的名字, 如例子中的 #operations-header </p>
    <div>
      <pack-table
        :data="filterTableData"
        :columns="columns"
      >
        <!--   自定义头部     -->
        <template #operations-header>
          <el-input v-model="search" size="small" placeholder="Type to search" />
        </template>
        <!--   自定义插槽部分     -->
        <template #operations="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
          >Edit</el-button
          >
          <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
          >Delete</el-button
          >
        </template>
      </pack-table>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const search = ref('')

const filterTableData = computed(() =>
    tableData.filter(
        (data) =>
            !search.value ||
            data.name.toLowerCase().includes(search.value.toLowerCase())
    )
)

const handleEdit = (index, row) => {
  console.log(index, row)
}
const handleDelete = (index, row) => {
  console.log(index, row)
}

const columns = [
  {
    prop: 'date',
    label: 'date'
  },
  {
    prop: 'name',
    label: 'name'
  },
  {
    prop: 'operations',
    align: 'right',
    headerSlot: true,
    slot: true,
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
    name: 'John',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Morgan',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Jessy',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
