<template>
  <span v-if="inline" :style="wrapStyle">
    <slot v-if="$slots.default"></slot>
    <template v-else>{{ computedText }}</template>
  </span>
  <div v-else :style="wrapStyle">
    <slot v-if="$slots.default"></slot>
    <template v-else>{{ computedText }}</template>
  </div>
</template>

<script>
export default {
  name: 'Text'
}
</script>
<script setup>
import { computed } from "vue";
import addUnit from "@/libs/function/addUnit";

const props = defineProps({
   modelValue: {
     type: String,
     default: ''
   },
  text: {
    type: String,
    default: ''
  },
  color: String,
  lineHeight: [String, Number],
  size: [String, Number],
  inline: {
    type: Boolean,
    default: false
  }
})

const wrapStyle = computed(() => {
  const style = {}
  if(props.color) style.color = props.color
  if(props.lineHeight) style.lineHeight = addUnit(props.lineHeight)
  if(props.size) style.size = addUnit(props.size)
  return style
})

const computedText = computed(() => (props.modelValue === undefined || props.modelValue === null || props.modelValue === '') ? props.text : props.modelValue)
</script>