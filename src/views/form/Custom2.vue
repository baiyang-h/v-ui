<template>
  <div>
    <el-select v-model="form.select" placeholder="请选择" @change="handleChange">
      <el-option label="上海" value="shanghai" />
      <el-option label="北京" value="beijing" />
    </el-select>
    <el-input v-model="form.input" placeholder="请输入" style="width: 150px; margin-left: 15px" @blur="handleChange"></el-input>
  </div>
</template>

<script setup>
import {reactive, toRaw, watch} from "vue";

const props = defineProps({
  modelValue: {
    type: Object,
    default() {
      return {
        input: '',
        select: ''
      }
    }
  }
})
const emit = defineEmits(['update:modelValue'])

const form = reactive({
  input: '',
  select: ''
})

watch(() => props.modelValue, (val) => {
  form.input = val.input
  form.select = val.select
}, {
  deep: true
})

const handleChange = () => {
  emit('update:modelValue', {
    input: form.input,
    select: form.select
  })
}
</script>
