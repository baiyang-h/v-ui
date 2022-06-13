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
    // 去掉 children el-table-column 有这个属性会包警告
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
      v-for="(column, index) in columnOption.children"
      :key="column.prop || index"
      :columnOption="column"
    >
      <template
        v-for="dynamicSlotName in ctx.mainSlot"
        #[dynamicSlotName]="scope"
      >
        <slot v-bind="scope" :name="dynamicSlotName" />
      </template>
    </column-dynamic>
  </el-table-column>
  <column-slot
    v-else
    :key="columnOption.prop || columnOption.label"
    v-bind="_columnOption"
  >
    <template
        v-for="dynamicSlotName in ctx.mainSlot"
        #[dynamicSlotName]="scope"
    >
      <slot v-bind="scope" :name="dynamicSlotName" />
    </template>
  </column-slot>
</template>