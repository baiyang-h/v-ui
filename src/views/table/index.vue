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
  </div>
</template>

<script setup>
import BaseTable from './components/base-table.vue'
import StripeTable from './components/stripe-table.vue'
import BorderTable from './components/border-table.vue'
import StatusTable from './components/status-table.vue'
</script>

<style scoped>
.box {
  margin-bottom: 30px;
}
</style>
