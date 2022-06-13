<template>
  <div class="box">
    <h2>树形数据与懒加载</h2>
    <p class="desc2">支持树类型的数据的显示。 当 row 中包含 children 字段时，被视为树形数据。 渲染嵌套数据需要 prop 的 row-key。 此外，子行数据可以异步加载。 设置 Table 的lazy属性为 true 与加载函数 load 。 通过指定 row 中的hasChildren字段来指定哪些行是包含子节点。 children 与hasChildren都可以通过 tree-props 配置。</p>
    <div>
      <pack-table
        :data="tableData"
        :option="option"
      >
        <template #operation="{ $index, row }">
          <el-button type="primary" @click="onHandleClick($index, row)">按钮</el-button>
        </template>
      </pack-table>
      <br />
      <pack-table
        :data="tableData1"
        :option="option1"
      />
    </div>
  </div>
</template>

<script setup>
const option = {
  rowKey: 'id',
  columns: [
    {
      prop: 'date',
      label: 'date'
    },
    {
      prop: 'name',
      label: 'name'
    },
    {
      prop: 'operation',
      label: '操作',
      slot: true
    }
  ]
}

const option1 = {
  rowKey: 'id',
  lazy: true,
  load(row, treeNode, resolve) {
    setTimeout(() => {
      resolve([
        {
          id: 31,
          date: '2016-05-01',
          name: 'wangxiaohu',
        },
        {
          id: 32,
          date: '2016-05-01',
          name: 'wangxiaohu',
        },
      ])
    }, 1000)
  },
  treeProps: { children: 'children', hasChildren: 'hasChildren' },
  columns: [
    {
      prop: 'date',
      label: 'date'
    },
    {
      prop: 'name',
      label: 'name'
    },
  ]
}

const tableData = [
  {
    id: 1,
    date: '2016-05-02',
    name: 'wangxiaohu',
  },
  {
    id: 2,
    date: '2016-05-04',
    name: 'wangxiaohu',
  },
  {
    id: 3,
    date: '2016-05-01',
    name: 'wangxiaohu',
    children: [
      {
        id: 31,
        date: '2016-05-01',
        name: 'wangxiaohu',
      },
      {
        id: 32,
        date: '2016-05-01',
        name: 'wangxiaohu',
      },
    ],
  },
  {
    id: 4,
    date: '2016-05-03',
    name: 'wangxiaohu',
  },
]
const tableData1 = [
  {
    id: 1,
    date: '2016-05-02',
    name: 'wangxiaohu',
  },
  {
    id: 2,
    date: '2016-05-04',
    name: 'wangxiaohu',
  },
  {
    id: 3,
    date: '2016-05-01',
    name: 'wangxiaohu',
    hasChildren: true,
  },
  {
    id: 4,
    date: '2016-05-03',
    name: 'wangxiaohu',
  },
]

const onHandleClick = (index, row) => {
  console.log(index, row)
}
</script>
