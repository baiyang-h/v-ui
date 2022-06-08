<script setup>
import { inject  } from 'vue'
import ColumnSlot from './column-slot.vue'

defineProps({
  columnOption: {
    type: Object,
    default() {
      return {}
    }
  }
})

const mainSlot = inject('mainSlot')

</script>

<template>
  <el-table-column
    v-bind="columnOption"
  >
    <template v-if="columnOption.children && columnOption.children.length">
      <column-dynamic
        v-for="column in columnOption.children"
        :key="column.prop || column.label"
        :columnOption="column"
      >
        <template
          v-for="item in mainSlot"
          #[item]="scope"
        >
          <slot v-bind="scope" :name="item" />
        </template>
      </column-dynamic>
    </template>
  </el-table-column>
</template>