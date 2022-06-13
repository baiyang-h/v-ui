<script setup>
defineProps({
  small: Boolean,
  background: Boolean,
  pageSize: {
    type: Number,
    default: 20
  },
  defaultPageSize: Number,
  total: Number,
  pageCount: Number,
  pagerCount: {
    type: Number,
    validator(value) {
      return (value | 0) === value && value > 4 && value < 22 && (value % 2) === 1;
    },
    default: 7
  },
  currentPage: {
    type: Number,
    default: 1
  },
  defaultCurrentPage: Number,
  layout: {
    default: 'total, sizes, prev, pager, next, jumper'
  },
  pageSizes: {
    type: Array,
    default() {
      return [20, 50, 100, 150, 200];
    }
  },
  popperClass: String,
  prevText: String,
  nextText: String,
  disabled: Boolean,
  hideOnSinglePage: {
    type: Boolean,
    default: true
  }
})
const emit = defineEmits([
    'size-change',
    'current-change',
    'prev-click',
    'next-click',
])

// 分页 current-change 改变时触发
const onCurrentChange = (page) => {
  emit('current-change', page)
}
// 分页 pageSize 改变时触发
const onSizeChange = (pageSize) => {
  emit('size-change', pageSize)
}

const onPrevClick = (page) => {
  emit('prev-click', page)
}

const onNextClick = (page) => {
  emit('next-click', page)
}
</script>

<template>
  <el-pagination
    :small="small"
    :background="background"
    :page-size="pageSize"
    :default-page-size="defaultPageSize"
    :total="total"
    :page-count="pageCount"
    :pager-count="pagerCount"
    :current-page="currentPage"
    :default-current-page="defaultCurrentPage"
    :layout="layout"
    :page-sizes="pageSizes"
    :popper-class="popperClass"
    :prev-text="prevText"
    :next-text="nextText"
    :disabled="disabled"
    :hide-on-single-page="hideOnSinglePage"
    @size-change="onSizeChange"
    @current-change="onCurrentChange"
    @prev-click="onPrevClick"
    @next-click="onNextClick"
  />
</template>