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
})
</script>

<template>
  <el-table :data="data" style="width: 100%">
    <el-table-column
      v-for="column in columns"
      :key="column.prop"
      :type="column"
      :prop="column.prop"
      :label="column.label"
    />
  </el-table>
</template>

<style scoped>

</style>