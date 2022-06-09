<script setup>
import { inject, computed } from 'vue'
import ColumnSlot from './column-slot.vue'

const props = defineProps({
  columnOption: {
    type: Object,
    default() {
      return {}
    }
  }
})

const _columnOption = computed(() => {
  let column = {}
  Object.keys(props.columnOption).forEach(key => {
    if(key !== 'children') {
      column[key] = props.columnOption[key]
    }
  })
  return column
})

const ctx = inject('ctx')

</script>

<template>
  <el-table-column
    v-if="columnOption.children && columnOption.children.length"
    v-bind="_columnOption"
  >
    <column-dynamic
      v-for="column in columnOption.children"
      :key="column.prop || column.label"
      :columnOption="column"
    >
      <template
        v-for="item in ctx.mainSlot"
        #[item]="scope"
      >
        <slot v-bind="scope" :name="item" />
      </template>
    </column-dynamic>
  </el-table-column>
  <column-slot
    v-else
    :key="columnOption.prop || columnOption.label"
    v-bind="_columnOption"
  >
    <template #header="headerScope">
      <slot :name="ctx.setCustomHeaderName(columnOption.prop)" v-bind="headerScope"></slot>
    </template>
    <template #default="defaultScope">
      <slot :name="columnOption.prop" v-bind="defaultScope"/>
    </template>
  </column-slot>
</template>