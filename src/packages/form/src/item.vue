<template>
  <el-row
    if="row.type === 'row'"
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
      <form-item :row="item">
        <slot />
      </form-item>
    </el-col>
  </el-row>
  <el-form-item
    v-else-if="row.type === 'col'"
  >
    <form-item
      v-for="(item, index) in row.children"
      :key="item.prop || item.label || index"
      :row="item"
    >
      <slot />
    </form-item>
  </el-form-item>
  <el-form-item
    v-else
    v-bind="filterFormItemProps"
    :label="row.label"
    :prop="row.prop"
  >
    <slot />
  </el-form-item>
</template>

<script>
export default {
  name: 'FormItem'
}
</script>
<script setup>
import { computed, getCurrentInstance } from 'vue'

const props = defineProps({
  row: {
    type: Object,
    default() {
      return {}
    }
  }
})

const instance = getCurrentInstance()

const defaultSpan = computed(() => 24/props.row.children.length)
// 过滤不必要的属性
const filterFormItemProps = computed(() => instance.appContext.config.globalProperties.$filterObject(props.row, ['attrs', 'span', 'offset', 'push', 'pull', 'xs', 'sm', 'md', 'lg', 'xl', 'tag']))
</script>

<style scoped>

</style>