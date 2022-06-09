<script>
export default {
  name: 'Gap'
}
</script>
<script setup>
/**
 * gap 间隔槽
 * @description 该组件一般用于内容块之间的一个灰色块隔开的场景，方便用户风格统一，减少工作量
 *
 * @property {String} bg-color 背景颜色（默认透明）
 * @property {String Number} height 分割槽高度，单位px（默认30）
 * @property {String Number} margin-top 与前一个组件的距离，单位px（默认0）
 * @property {String Number} margin-bottom 与后一个组件的距离，单位px（默认0）
 * @example <u-gap height="80" bg-color="#bbb" margin-top="30"></u-gap>
 */
import { computed } from 'vue'

const props = defineProps({
  // 背景颜色
  bgColor: {
    type: String,
    default: 'transparent'    // 背景透明
  },
  // 高度
  height: {
    type: [String, Number],
    default: 30
  },
  // 与上一个组件的距离
  marginTop: {
    type: [String, Number],
    default: 0
  },
  // 与下一个组件的距离
  marginBottom: {
    type: [String, Number],
    default: 0
  }
})

const gapStyle = computed(() => ({
  backgroundColor: props.bgColor,
  height:  parseInt(props.height) + 'px',
  marginTop: parseInt(props.marginTop) + 'px',
  marginBottom: parseInt(props.marginBottom) + 'px',
}))
</script>

<template>
  <div :style="[gapStyle]"></div>
</template>