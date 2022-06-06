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
    <!--  固定表头  -->
    <height-table />
    <!--   固定列   -->
    <fixed-column-table />
  </div>
</template>

<script setup>
import BaseTable from './components/base-table.vue'
import StripeTable from './components/stripe-table.vue'
import BorderTable from './components/border-table.vue'
import StatusTable from './components/status-table.vue'
import HeightTable from './components/height-table.vue'
import FixedColumnTable from './components/fixed-column-table.vue'
</script>

<style scoped>
.box {
  margin-bottom: 30px;
}
</style>
