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
      :key="item.prop || item.label || index"
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
        v-model="modelValue"
      />
    </el-col>
  </el-row>
  <el-form-item
    v-else-if="row.type === 'col'"
  >
    <form-item-dynamic
      v-for="(item, index) in row.children"
      :key="item.prop || item.label || index"
      :row="item"
      v-model="modelValue[row.prop]"
    />
  </el-form-item>
  <form-item-default
    v-else
    :row="row"
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
  }
})
defineEmits(['update:modelValue'])

const defaultSpan = computed(() => {
  if(props.row.children && props.row.children.length) return 24/props.row.children.length

})
</script>

<style scoped>

</style>