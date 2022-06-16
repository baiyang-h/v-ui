<template>
  <el-table-column
    v-bind="props"
  >
    <!--  插槽部分  -->
    <template #header="headerProps" v-if="headerSlot">
      <slot :name="instance.setCustomHeaderName(prop)" v-bind="headerProps" v-if="$slots[instance.setCustomHeaderName(prop)]"></slot>
    </template>
    <template #default="defaultProps">
      <slot :name="prop" v-bind="defaultProps" v-if="slot && $slots[prop]"></slot>
    </template>
  </el-table-column>
</template>

<script>
import { ElTableColumn } from 'element-plus'
export default {
  extends: ElTableColumn
}
</script>
<script setup>
import {inject} from "vue";

const props = defineProps({
  slot: Boolean,
  headerSlot: Boolean,
})

const instance = inject('instance')

</script>
