<template>
  <div>
    <!-- 基础表格   -->
    <base-table />
    <!--  带斑马纹表格  -->
    <stripe-table />
    <!-- 带边框表格   -->
    <border-table />
    <!-- 带状态表格   -->
    <status-table />
    <!--  分页  -->
    <pagination-table />
    <!--  固定表头  -->
    <height-table />
    <!--   固定列   -->
    <fixed-column-table />
    <!-- 多级表头   -->
    <much-header-table />
    <!-- 单选  -->
    <single-table />
    <!-- 多选   -->
    <multiple-table />
    <multiple-table2 />
    <!-- 排序   -->
    <sortable-table />
    <!-- 筛选   -->
    <filter-table />
    <!--  自定义列模板  -->
    <custom-column-table />
    <!--  自定义表头  -->
    <custom-header-table />
    <!--  展开行  -->
    <expand-table />
    <!--  树形数据与懒加载  -->
    <tree-load-table />
    <!--  表尾合计行  -->
    <end-merge-table />
    <!--  合并行或列  -->
    <row-col-merge-table />
    <!-- 索引/自定义索引  -->
    <index-table />
  </div>
</template>

<script setup>
import BaseTable from './components/base-table.vue'
import StripeTable from './components/stripe-table.vue'
import BorderTable from './components/border-table.vue'
import StatusTable from './components/status-table.vue'
import PaginationTable from './components/pagination-table.vue'
import HeightTable from './components/height-table.vue'
import FixedColumnTable from './components/fixed-column-table.vue'
import MuchHeaderTable from './components/much-header-table.vue'
import SingleTable from './components/single-table.vue'
import MultipleTable from './components/multiple-table.vue'
import MultipleTable2 from './components/multiple-table2.vue'
import IndexTable from './components/index-table.vue'
import SortableTable from './components/sortable-table.vue'
import FilterTable from './components/filter-table.vue'
import CustomColumnTable from './components/custom-column-table.vue'
import CustomHeaderTable from './components/custom-header-table.vue'
import ExpandTable from './components/expand-table.vue'
import TreeLoadTable from './components/tree-load-table.vue'
import EndMergeTable from './components/end-merge-table.vue'
import RowColMergeTable from './components/row-col-merge-table.vue'
</script>

<style scoped>
.box {
  margin-bottom: 30px;
}
</style>
