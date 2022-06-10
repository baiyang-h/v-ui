<script setup>
import { computed, inject } from 'vue'
import config from "./config.js";

const ctx = inject('ctx')

const tableOption = computed(() => ctx.tableOption)
const pagination = computed(() => ctx.pagination)

const indexMethod = (index) => {
  return (
      index +
      1 +
      ((pagination.value.currentPage || 1) - 1) *
      (pagination.value.pageSize || 20)
  );
}

</script>

<template>
  <el-table-column
    v-if="tableOption.expand"
    type="expand"
    key="expand"
    align="center"
    :fixed="tableOption.expandFixed ?? config.expandFixed"
    :width="tableOption.expandWidth || config.expandWidth"
  >
    <template #default="scope">
      <slot name="expand" v-bind="scope"></slot>
    </template>
  </el-table-column>
  <el-table-column
    v-if="tableOption.selection"
    type="selection"
    key="selection"
    align="center"
    :fixed="tableOption.selectionFixed ?? config.selectionFixed"
    :width="tableOption.selectionWidth || config.selectionWidth"
    :selectable="tableOption.selectable"
    :reserve-selection="tableOption.reserveSelection"
  />
  <el-table-column
    v-if="tableOption.index"
    type="index"
    key="index"
    align="center"
    :fixed="tableOption.indexFixed ?? config.indexFixed"
    :label="tableOption.indexLabel || config.indexLabel"
    :width="tableOption.indexWidth || config.indexWidth"
    :index="indexMethod"
  />
</template>