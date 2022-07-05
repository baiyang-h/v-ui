<template>
  <el-row
    v-if="row.type === 'row'"
    :gutter="row.gutter"
    :justify="row.justify"
    :align="row.align"
    :tag="row.tag"
  >
    <el-col
      v-for="(item, index) in row.children"
      :key="getDepthProp(item.prop) || item.label || index"
      :span="item.span || defaultSpan"
      :offset="item.offset"
      :push="item.push"
      :pull="item.pull"
      :xs="item.xs"
      :sm="item.sm"
      :md="item.md"
      :lg="item.lg"
      :xl="item.xl"
      :tag="item.tag"
    >
      <form-item-dynamic
        :row="item"
        :prop="getDepthProp(item.prop)"
        v-model="modelValue"
      />
    </el-col>
  </el-row>
  <el-form-item
    v-else-if="row.type === 'col'"
    :prop="prop"
  >
    <form-item-dynamic
      v-for="(item, index) in row.children"
      :key="item.prop || item.label || index"
      :row="item"
      :prop="getDepthProp(item.prop)"
      v-model="modelValue[row.prop]"
    />
  </el-form-item>
  <form-item-default
    v-else
    :row="row"
    :prop="prop"
    :modelValue="modelValue[row.prop]"
    @update:modelValue="$emit('update:modelValue', $event)"
  />
</template>

<script>
export default {
  name: 'FormItemDynamic'
}
</script>
<script setup>
import { computed } from 'vue'
import FormItemDefault from './item-default.vue'

const props = defineProps({
  modelValue: {
    default: undefined
  },
  row: {
    type: Object,
    default() {
      return {}
    }
  },
  prop: {
    type: String,
    default: ''
  }
})
defineEmits(['update:modelValue'])

const defaultSpan = computed(() => {
  if(props.row.children && props.row.children.length) return 24/props.row.children.length
})

// 如果form是一个深度的对象， prop 需要接连，如 a.b.c
const getDepthProp = (nowProp) => {
  if(props.prop) {
    return props.prop + '.' + nowProp
  } else {
    return nowProp
  }
}
</script>

<style scoped>

</style>