<template>
  <el-checkbox-group
    v-bind="props"
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    @change="$emit('change', $event)"
  >
    <template v-if="options">
      <component
        v-for="(item, index) in genOptions"
        :key="index"
        :is="getRadioTypeName"
        v-bind="item"
        :label="item.value"
      >
        {{item.label}}
      </component>
    </template>
    <slot v-else></slot>
  </el-checkbox-group>
</template>

<script>
/**
 * @description 复选框群组，可通过options配置，也可以slot传入，一组复选框选择
 * @property {Array} options 复选框按钮群组可通过options配置，也可slot插入，options优先级高于slot，配置项即是 el-checkbox 中的属性，内部做了处理主要会生成 value和label两个属性，其他属性手动传入
 *    - [{value: 1, label: '上海', disabled: true}]
 *    - 直接一个数组 ['上海', '北京'], value和label都为数组中的值
 *    - ['上海', {value: 1, label: '上海'}, {value: 333}]
 * @property {String} mode 当dc-checkbox-group是通过options配置的方式时，有普通形式展示和按钮形式展示，默认不同单选形式，mode="checkbox"(默认)、mode="button"
 *
 * @example <checkbox-group v-model="radio3" size="small" :options="options"></checkbox-group>
 */
import { ElCheckboxGroup } from 'element-plus'
export default {
  name: 'CheckboxGroup',
  extends: ElCheckboxGroup
}
</script>
<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => ([])
  },
  // 配置项
  options: {
    type: Array
  },
  // 配置模式时展示的形式 checkbox、button（dc-checkbox、dc-checkbox-button）
  mode: {
    type: String,
    default: 'checkbox'
  }
})
defineEmits(['update:modelValue', 'change'])

// 展示形式
const getRadioTypeName = computed(() => props.mode === 'button' ? 'el-checkbox-button' : 'el-checkbox')
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
