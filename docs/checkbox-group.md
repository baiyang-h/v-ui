## 基础

```vue
<template>
  <p-checkbox-group
    v-model="checkbox"
    :options="options"
    @change="change"
  >
  </p-checkbox-group>
</template>

<script>
export default {
  data() {
    return {
      checkbox: [],
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
<p-checkbox-group
  v-model="checkbox"
  :options="options"
  mode="button"
  @change="change"
>
</p-checkbox-group>

// 默认 不写 为 checkbox
<p-checkbox-group
  v-model="checkbox"
  :options="options"
  mode="checkbox"
  @change="change"
>
</p-checkbox-group>
```


## checkbox-group Attributes

| 属性 | 说明 |
| ---- | ---- |
| options    | 配置项，value、label   |
| mode    | 组类型，checkbox、button，默认checkbox    |
