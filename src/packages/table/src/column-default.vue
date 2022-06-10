<script setup>
import { useAttrs } from 'vue'

defineProps({
  // (新) 表格类型,第一列显示的类型   selection / index / expand
  type: {
    type: String,
    default: 'default'
  },
})

const attrs = useAttrs()
</script>

<template>
  <el-table-column
    v-if="type === 'expand'"
  >
  </el-table-column>
  <el-table-column
    v-if="type === 'selection'"
  />
  <el-table-column
    v-if="type === 'index'"
  />
</template>