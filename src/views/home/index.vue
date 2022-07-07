<template>
  <div>
    <el-input v-model.trim="aaaa"></el-input>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const aaaa = ref('133')
</script>