<script>
export default {
  name: 'Table'
}
</script>
<script setup>
defineProps({
  data: {
    type: Array,
    default: () => ([])
  },
  columns: {
    type: Array,
    default: () => ([])
  },
  pagination: {
    type: Object,
    default: () => ({
      total: 0,
      currentPage: 1,
      pageSize: 20
    })
  },
  height: [String, Number],
  maxHeight: [String, Number],
  stripe: Boolean,
  border: Boolean,
  size: String,
  fit: {
    type: Boolean,
    default: true
  },
  showHeader: {
    type: Boolean,
    default: true
  },
  highlightCurrentRow: Boolean,
  currentRowKey: [String, Number],
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  cellClassName: [String, Function],
  cellStyle: [Object, Function],
  headerRowClassName: [String, Function],
  headerRowStyle: [Object, Function],
  headerCellClassName: [String, Function],
  headerCellStyle: [Object, Function],
  rowKey: [String, Function],
  emptyText: String,
  defaultExpandAll: Boolean,
  expandRowKeys: Array,
  defaultSort: Object,
  tooltipEffect: String,
  showSummary: Boolean,
  sumText: String,
  summaryMethod: Function,
  spanMethod: Function,
  selectOnIndeterminate: {
    type: Boolean,
    default: true
  },
  indent: {
    type: Number,
    default: 16
  },
  lazy: Boolean,
  load: Function,
  treeProps: {
    type: Object,
    default() {
      return {
        hasChildren: 'hasChildren',
        children: 'children'
      };
    }
  },
  tableLayout: {
    type: String,
    default: 'fixed'
  },
  scrollbarAlwaysOn: Boolean,
  flexible: Boolean
})
const emit = defineEmits([
    'select'
])

</script>

<template>
  <div>
    <el-table
      style="width: 100%"
      :data="data"
      @select="$emit('select')"
    >
      <el-table-column
        v-for="column in columns"
        :key="column.prop"
        :prop="column.prop"
        :label="column.label"
      />
    </el-table>
  </div>

</template>

<style scoped>

</style>