<template>
  <el-pagination
    v-bind="$props"
    @size-change="$emit('size-change', $event)"
    @current-change="$emit('current-change', $event)"
    @prev-click="$emit('prev-click', $event)"
    @next-click="$emit('next-click', $event)"
  />
</template>
<script>
import { ElPagination } from 'element-plus'
export default {
  extends: ElPagination
}
</script>