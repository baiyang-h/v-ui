<script setup>
import {inject} from 'vue'
import ColumnDynamic from './column-dynamic.vue'
import ColumnSlot from './column-slot.vue'

defineProps({
  // el-table-column 列表配置项
  columns: {
    type: Array,
    default() {
      return []
    }
  }
})

const ctx = inject('ctx')

</script>

<template>
  <slot name="header"></slot>
  <!-- 动态列 -->
  <template v-for="(column, index) in columns">
    <!-- 如果是多级表头, 会有嵌套 -->
    <column-dynamic
      v-if="column.children && column.children.length"
      :columnOption="column"
      :key="column.prop || index"
    >
      <template v-for="dynamicSlotName in ctx.mainSlot" #[dynamicSlotName]="scope">
        <slot :name="dynamicSlotName" v-bind="scope"></slot>
      </template>
    </column-dynamic>
    <!-- 无嵌套时 -->
    <column-slot
      v-else
      :key="column.prop || index"
      v-bind="column"
    >
      <template v-for="dynamicSlotName in ctx.mainSlot" #[dynamicSlotName]="scope">
        <slot :name="dynamicSlotName" v-bind="scope"></slot>
      </template>
    </column-slot>
  </template>
</template>