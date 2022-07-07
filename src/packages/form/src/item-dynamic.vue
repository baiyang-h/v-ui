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
      :key="getDepthProp(item) || item.label || index"
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
        :prop="getDepthProp(item)"
        :modelValue="modelValue"
        @update:modelValue="setFormModel"
      >
        <template
            v-for="dynamicSlotName in instance.mainSlot"
            #[dynamicSlotName]
        >
          <slot :name="dynamicSlotName" />
        </template>
      </form-item-dynamic>
    </el-col>
  </el-row>
  <el-form-item
    v-else-if="row.type === 'col'"
    v-bind="$filterObject(row, ['type', 'label', 'prop', 'children'])"
    :prop="prop"
    :label="row.label"
    :ref="(el) => instance.setFormItemRef(el, prop)"
  >
    <form-item-dynamic
      v-for="(item, index) in row.children"
      :key="item.prop || item.label || index"
      :row="item"
      :prop="getDepthProp(item)"
      :modelValue="modelValue[row.prop]"
      @update:modelValue="setFormModel"
    >
      <template
        v-for="dynamicSlotName in instance.mainSlot"
        #[dynamicSlotName]
      >
        <slot :name="dynamicSlotName" />
      </template>
    </form-item-dynamic>
  </el-form-item>
  <template
    v-else-if="row.type==='slot'"
  >
    <slot :name="row.name" v-if="$slots[row.name]"/>
  </template>
  <form-item-default
    v-else
    :row="row"
    :prop="prop"
    :modelValue="modelValue[row.prop]"
    @update:modelValue="setFormModel"
  >
    <template
      v-for="dynamicSlotName in instance.mainSlot"
      #[dynamicSlotName]
    >
      <slot :name="dynamicSlotName" />
    </template>
  </form-item-default>
</template>

<script>
export default {
  name: 'FormItemDynamic'
}
</script>
<script setup>
import { computed, inject } from 'vue'
import FormItemDefault from './item-default.vue'

const props = defineProps({
  modelValue: {
    default: undefined
  },
  row: {
    type: Object,
    default() {
      return {}
    },
    validator(value) {
      if(value.type === 'row' || value.type === 'col') {
        if(!value.children) {
          throw new Error('注意: 类型为 row 或 col 必须包含 children 属性')
        }
      }
      return true
    }
  },
  prop: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['update:modelValue'])

const instance = inject('instance')

const defaultSpan = computed(() => {
  if(props.row.children && props.row.children.length) return 24/props.row.children.length
})

// 如果form是一个深度的对象， prop 需要接连，如 a.b.c
const getDepthProp = (item) => {
  if(props.prop) {
    if(item.type === 'row') {
      return props.prop
    } else {
      return props.prop + '.' + item.prop
    }
  } else {
    return item.prop
  }
}

const setFormModel = (value, depProp) => {
  emit('update:modelValue', value, depProp)
}
</script>