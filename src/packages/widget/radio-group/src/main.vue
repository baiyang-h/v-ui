<template>
  <el-radio-group
    :modelValue="modelValue"
    :size="size"
    :disabled="disabled"
    :textColor="textColor"
    :fill="fill"
    :name="name"
    :label="label"
    @update:modelValue="$emit('update:modelValue', $event)"
    @change="$emit('change', $event)"
  >
    <template v-if="options">
      <component
        v-for="(item, index) in genOptions"
        :key="index"
        v-bind="item"
        :is="getRadioTypeName"
        :label="item.value"
      >
        {{item.label}}
      </component>
    </template>
    <slot v-else></slot>
  </el-radio-group>
</template>

<script>
/**
 * @description 单选按钮群组，可通过options配置，也可以slot传入，一组单选框选择
 * @property {Array} options 单选按钮群组可通过options配置，也可slot插入，options优先级高于slot，配置项即是 el-radio中的属性，内部做了处理主要会生成 value和label两个属性，其他属性手动传入
 *    - [{value: 1, label: '上海', disabled: true}]
 *    - 直接一个数组 ['上海', '北京'], value和label都为数组中的值
 *    - ['上海', {value: 1, label: '上海'}, {value: 333}]
 * @property {String} mode 当radio-group是通过options配置的方式时，有普通形式展示和按钮形式展示，默认不同单选形式，mode="radio"(默认)、mode="button"
 *
 * @example <radio-group v-model="radio3" size="small" :options="options" />
 */
export default {
  name: 'RadioGroup',
}
</script>
<script setup>
import { computed } from 'vue'

const props = defineProps({
  // 配置模式时展示的形式 radio、button（el-radio、el-radio-button）
  mode: {
    type: String,
    default: 'radio'
  },
  // 配置项
  options: {
    type: Array,
  },
  modelValue: {
    default: undefined
  },
  size: String,
  disabled: Boolean,
  textColor: String,
  fill: String,
  name: String,
  label: [String, Number],
})
defineEmits(['update:modelValue', 'change'])

// 展示形式
const getRadioTypeName = computed(() => props.mode === 'button' ? 'el-radio-button' : 'el-radio')

// 生成一定有 [{value, label}] 字段的options
const genOptions = computed(() => {
  return props.options.map(item => {
    if(typeof item !== 'object') {
      return {value: item, label: item}
    } else {
      return {...item, value: item.value, label: item.label ?? item.value}
    }
  })
})

</script>
