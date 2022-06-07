<script setup>
import { inject  } from 'vue'
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
  <column-slot
    v-for="(column, index) in columns"
    :key="column.prop || Date.now()+index"
    v-bind="column"
    :prop="column.prop"
    :label="column.label"
    :slot="column.slot"
    :header-slot="column.headerSlot"
  >
    <!--   实现原组件中的 header 插槽    -->
    <template v-if="column.headerSlot" #header="headerScope">
      <slot :name="`${column.prop}-header`" v-bind="headerScope" v-if="$slots[`${column.prop}-header`]"></slot>
    </template>
    <!--    有插槽    -->
    <template #default="defaultScope">
      <!--  嵌套写法的时候  -->
      <column-dynamic
        v-if="column.children && column.children.length"
        :columns="column.children"
      >
        <template
          v-for="dynamicSlotName in mainSlot"
          #[dynamicSlotName]="scope"
        >
          <slot :name="dynamicSlotName" v-bind="scope"></slot>
        </template>
      </column-dynamic>
      <template v-else>
        <slot
          v-if="column.slot && $slots[column.prop]"
          v-bind="defaultScope"
          :name="column.prop"
        />
      </template>
    </template>
  </column-slot>
</template>