<script setup>
defineProps({
  type: {
    type: String,
    default: 'default'
  },
  index: [Number, Function],
  label: String,
  columnKey: String,
  prop: String,
  width: [String, Number],
  minWidth: [String, Number],
  fixed: [Boolean, String],
  renderHeader: Function,
  sortable: {
    type: [Boolean, String],
    default: false
  },
  sortMethod: Function,
  sortBy: [String, Function, Array],
  sortOrders: {
    type: Array,
    default() {
      return ['ascending', 'descending', null];
    },
    validator(val) {
      return val.every(order => ['ascending', 'descending', null].indexOf(order) > -1);
    }
  },
  resizable: {
    type: Boolean,
    default: true
  },
  formatter: Function,
  showOverflowTooltip: Boolean,
  align: String,
  headerAlign: String,
  className: String,
  labelClassName: String,
  selectable: Function,
  reserveSelection: Boolean,
  filters: Array,
  filterPlacement: String,
  filterMultiple: {
    type: Boolean,
    default: true
  },
  filterMethod: Function,
  filteredValue: Array,
  property: String,
  showTooltipWhenOverflow: Boolean,
  // （新）是否有插槽
  slot: Boolean,
  // （新）是否有头部 header 插槽
  headerSlot: Boolean,
  // (新) 增对于多级表头
  children: Array,
})
</script>

<template>
  <el-table-column
    :type="type"
    :index="index"
    :label="label"
    :columnKey="columnKey"
    :prop="prop"
    :width="width"
    :minWidth="minWidth"
    :fixed="fixed"
    :renderHeader="renderHeader"
    :sortable="sortable"
    :sortMethod="sortMethod"
    :sortBy="sortBy"
    :sortOrders="sortOrders"
    :resizable="resizable"
    :formatter="formatter"
    :showOverflowTooltip="showOverflowTooltip"
    :align="align"
    :headerAlign="headerAlign"
    :className="className"
    :labelClassName="labelClassName"
    :selectable="selectable"
    :reserveSelection="reserveSelection"
    :filters="filters"
    :filterPlacement="filterPlacement"
    :filterMultiple="filterMultiple"
    :filterMethod="filterMethod"
    :filteredValue="filteredValue"
    :property="property"
    :showTooltipWhenOverflow="showTooltipWhenOverflow"
  >
    <!--  插槽部分  -->
    <template #header="headerProps" v-if="headerSlot">
      <slot name="header" v-bind="headerProps" v-if="$slots.header"></slot>
    </template>
    <template #default="defaultProps" v-if="slot">
      <slot name="default" v-bind="defaultProps" v-if="$slots.default"></slot>
    </template>
  </el-table-column>
</template>
