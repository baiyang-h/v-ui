<template>
  <div>
    这是自定义1
    <el-input
      style="width: 150px"
      placeholder="请输入"
      :modelValue="modelValue"
      @input="$emit('update:modelValue', $event)"></el-input>
  </div>
</template>

<script setup>
const props = defineProps(['modelValue'])
 defineEmits(['update:modelValue'])
</script>
