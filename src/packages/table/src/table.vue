<script>
export default {
  name: 'Table'
}
</script>
<script setup>
import { ref, useSlots, computed, provide  } from 'vue'
import Column from './column.vue'
import ColumnDefault from './column-default.vue'
import Pagination from './pagination.vue'

const props = defineProps({
  // （新） 列表数据
  data: {
    type: Array,
    default: () => ([])
  },
  option: {
    type: Object,
    required: true,
    default: (rawProps) => ({
      ...rawProps,
      // 列表配置
      columns: []
    })
  },
  // （新） 分页
  pagination: {
    type: Object,
    default: () => ({
      total: 0,
      currentPage: 1,
      pageSize: 20
    })
  },
})
const emit = defineEmits([
  'select',
  'select-all',
  'selection-change',
  'cell-mouse-enter',
  'cell-mouse-leave',
  'cell-click',
  'cell-dblclick',
  'cell-contextmenu',
  'row-click',
  'row-contextmenu',
  'row-dblclick',
  'header-click',
  'header-contextmenu',
  'sort-change',
  'filter-change',
  'current-change',
  'header-dragend',
  'expand-change',
  'page-current-change',       // （新） 分页 选择页码
  'page-size-change',          // （新） 分页 选页数
  'page-prev-click',          // （新） 分页 用户点击上一页按钮改变当前页时触发
  'page-next-click',          // （新） 分页 用户点击下一页按钮改变当前页时触发
])

const slots = useSlots()
const tableRef = ref()

// 所有 table 中插槽的name
const mainSlot = computed(() => Object.keys(slots))


provide('ctx', {
  tableOption: props.option,
  pagination: props.pagination,
  // table组件传入的所有插槽名 list
  mainSlot: Object.keys(slots),
  // 自定义表头 slot 名字前面加上   prop名+header
  setCustomHeaderName
})

// 事件
const select = (...args) => emit('select', ...args)
const selectAll = (...args) => emit('select-all', ...args)
const selectionChange = (...args) => emit('selection-change', ...args)
const cellMouseEnter = (...args) => emit('cell-mouse-enter', ...args)
const cellMouseLeave = (...args) => emit('cell-mouse-leave', ...args)
const cellClick = (...args) => emit('cell-click', ...args)
const cellDblclick = (...args) => emit('cell-dblclick', ...args)
const cellContextmenu = (...args) => emit('cell-contextmenu', ...args)
const rowClick = (...args) => emit('row-click', ...args)
const rowContextmenu = (...args) => emit('row-contextmenu', ...args)
const rowDblclick = (...args) => emit('row-dblclick', ...args)
const headerClick = (...args) => emit('header-click', ...args)
const sortChange = (...args) => emit('sort-change', ...args)
const filterChange = (...args) => emit('filter-change', ...args)
const currentChange = (...args) => emit('current-change', ...args)
const headerDragend = (...args) => emit('header-dragend', ...args)
const expandChange = (...args) => emit('expand-change', ...args)

// 方法
const clearSelection = () => tableRef && tableRef.value.clearSelection()
const getSelectionRows = () => tableRef && tableRef.value.getSelectionRows()
const toggleRowSelection = (row, selected) => tableRef && tableRef.value.toggleRowSelection(row, selected)
const toggleAllSelection = () => tableRef && tableRef.value.toggleAllSelection()
const toggleRowExpansion = (row, expanded) => tableRef && tableRef.value.toggleRowExpansion(row, expanded)
const setCurrentRow = (row) => tableRef && tableRef.value.setCurrentRow(row)
const clearSort = () => tableRef && tableRef.value.clearSort()
const clearFilter = (columnKeys) => tableRef && tableRef.value.clearFilter(columnKeys)
const doLayout = () => tableRef && tableRef.value.doLayout()
const sort = (prop, order) => tableRef && tableRef.value.sort(prop, order)
const scrollTo = (options, yCoord) => tableRef && tableRef.value.scrollTo(options, yCoord)
const setScrollTop = (top) => tableRef && tableRef.value.setScrollTop(top)
const setScrollLeft = (left) => tableRef && tableRef.value.setScrollLeft(left)
// 向外暴露的方法
defineExpose({
  tableRef,
  clearSelection,
  getSelectionRows,
  toggleRowSelection,
  toggleAllSelection,
  toggleRowExpansion,
  setCurrentRow,
  clearSort,
  clearFilter,
  doLayout,
  sort,
  scrollTo,
  setScrollTop,
  setScrollLeft,
})

// 分页 current-change 改变时触发
const onPageCurrentChange = (page) => {
  emit('page-current-change', page)
}
// 分页 pageSize 改变时触发
const onPageSizeChange = (pageSize) => {
  emit('page-size-change', pageSize)
}

const onPrevClick = (page) => {
  emit('page-prev-click', page)
}

const onNextClick = (page) => {
  emit('page-next-click', page)
}

// 自定义表头时对外部传入的插槽我们增加上属性名前缀, 即以前是 #header, 现改为 #name-header
function setCustomHeaderName(prop) {
  return `${prop}-header`
}

</script>

<template>
  <div class="p-table">
    <el-table
      ref="tableRef"
      style="width: 100%"
      :data="data"
      v-bind="option"
      @select="select"
      @select-all="selectAll"
      @selection-change="selectionChange"
      @cell-mouse-enter="cellMouseEnter"
      @cell-mouse-leave="cellMouseLeave"
      @cell-click="cellClick"
      @cell-dblclick="cellDblclick"
      @cell-contextmenu="cellContextmenu"
      @row-click="rowClick"
      @row-contextmenu="rowContextmenu"
      @row-dblclick="rowDblclick"
      @header-click="headerClick"
      @header-contextmenu="sortChange"
      @sort-change="sortChange"
      @filter-change="filterChange"
      @current-change="currentChange"
      @header-dragend="headerDragend"
      @expand-change="expandChange"
    >
      <!--   原生的 Table 插槽   -->
      <template #append v-if="$slots.append">
        <slot name="append"></slot>
      </template>
      <!--   原生的 Table 插槽   -->
      <template #empty v-if="$slots.empty">
        <slot name="empty"></slot>
      </template>
      <column
        :columns="option.columns"
      >
        <!--   快捷 首部特殊列 对应列的类型   selection / index / expand  -->
        <template #header>
          <column-default>
            <template #expand="scope">
              <slot v-bind="scope" name="expand"></slot>
            </template>
          </column-default>
        </template>
        <template
          v-for="item in mainSlot"
          #[item]="scope"
        >
          <slot v-bind="scope" :name="item" />
        </template>
      </column>
    </el-table>
    <el-pagination
      v-if="pagination"
      v-bind="props.pagination"
      :currentPage="props.pagination.currentPage"
      :page-size="props.pagination.pageSize"
      :total="props.pagination.total"
      @current-change="onPageCurrentChange"
      @size-change="onPageSizeChange"
      @prev-click="onPrevClick"
      @next-click="onNextClick"
    />
  </div>
</template>

<style scoped>
.el-pagination {
  justify-content: flex-end;
  margin-top: 15px;
}
</style>

