## 按钮样式配置方式

```vue
<template>
  <p-radio-group
    v-model="radio"
    :options="options"
    @change="change"
  >
  </p-radio-group>
</template>

<script>
export default {
  data() {
    return {
      radio: '广州',
      options: [
        {value: 1, label: 'aaa' },
        {value: 2, label: 'bbb', disabled: true},
      ]
    }
  },
  methods: {
    change(value) {
      console.log(value);
    }
  }
}
</script>
```

```js
// options 可写成如下
[
  {value: 1, label: 'aaa' },
  {value: 2, label: 'bbb', disabled: true},
]

// 会转为 [{value: 1111, label: 1111 }, {value: 2222, label: 2222 }, {value: 3333, label: 3333 },]
[
  1111,
  2222,
  3333,
]
  
// 会转为 [{value: 1111, label: 1111 }, {value: 1, label: 'aaa' }, {value: 2, label: 2 },]
[
  1111,
  {value: 1, label: 'aaa' },
  {value: 2 },
]
```

### 配置方式按钮样式

如果配置方式想要按钮样式，需要使用 `mode="button"`

```vue
<p-radio-group
  v-model="radio"
  :options="options"
  mode="button"
  @change="change"
>
</p-radio-group>

// 默认 不写 为 radio
<p-radio-group
  v-model="radio"
  :options="options"
  mode="radio"
  @change="change"
>
</p-radio-group>
```

## Radio-group Attributes

| 属性 | 说明 |
| ---- | ---- |
| options    | 配置项，value、label   |
| mode    | 组类型，radio、button，默认radio    |
