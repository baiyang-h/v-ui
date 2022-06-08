<script setup>
import { inject } from 'vue'
import ColumnDynamic from './column-dynamic.vue'
import ColumnSlot from './column-slot.vue'

defineProps({
  columns: {
    type: Array,
    default() {
      return []
    }
  }
})

const mainSlot = inject('mainSlot')

</script>

<template>
  <template v-for="column in columns">
    <column-dynamic
      v-if="column.children && column.children.length"
      :columnOption="column"
      :key="column.prop || column.label"
    >
      <template v-for="dynamicSlotName in mainSlot" #[dynamicSlotName]="scope">
        <slot :name="dynamicSlotName" v-bind="scope"></slot>
      </template>
    </column-dynamic>
    <column-slot
      v-else
      :key="column.prop || column.label"
      v-bind="column"
    >
      <template #header="headerScope">
        <slot :name="`${column.prop}-header`" v-bind="headerScope"></slot>
      </template>
      <template #default="defaultScope">
        <slot
          v-if="column.slot && $slots[column.prop]"
          v-bind="defaultScope"
          :name="column.prop"
        />
      </template>
    </column-slot>
  </template>
</template>