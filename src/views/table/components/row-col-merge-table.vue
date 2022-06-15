<template>
  <div class="box">
    <h2>合并行或列</h2>
    <p class="desc1">多行或多列共用一个数据时，可以合并行或列。</p>
    <p class="desc2">通过给 table 传入span-method方法可以实现合并行或列， 方法的参数是一个对象，里面包含当前行 row、当前列 column、当前行号 rowIndex、当前列号 columnIndex 四个属性。 该函数可以返回一个包含两个元素的数组，第一个元素代表 rowspan，第二个元素代表 colspan。 也可以返回一个键名为 rowspan 和 colspan 的对象。</p>
    <div>
      <p-table
        :data="tableData"
        :option="option"
      />
      <br />
      <p-table
        :data="tableData"
        :option="option2"
      />
    </div>
  </div>
</template>

<script setup>
const arraySpanMethod = ({
 row,
 column,
 rowIndex,
 columnIndex,
}) => {
  if (rowIndex % 2 === 0) {
    if (columnIndex === 0) {
      return [1, 2]
    } else if (columnIndex === 1) {
      return [0, 0]
    }
  }
}

const objectSpanMethod = ({
  row,
  column,
  rowIndex,
  columnIndex,
}) => {
  if (columnIndex === 0) {
    if (rowIndex % 2 === 0) {
      return {
        rowspan: 2,
        colspan: 1,
      }
    } else {
      return {
        rowspan: 0,
        colspan: 0,
      }
    }
  }
}


const option = {
  spanMethod: arraySpanMethod,
  border: true,
  columns: [
    {
      prop: 'id',
      label: 'ID'
    },
    {
      prop: 'name',
      label: 'Name'
    },
    {
      prop: 'amount1',
      label: 'Amount 1'
    },
    {
      prop: 'amount2',
      label: 'Amount 2'
    },
    {
      prop: 'amount3',
      label: 'Amount 3'
    },
  ]
}
const option2 = {
  spanMethod: objectSpanMethod,
  border: true,
  columns: [
    {
      prop: 'id',
      label: 'ID'
    },
    {
      prop: 'name',
      label: 'Name'
    },
    {
      prop: 'amount1',
      label: 'Amount 1'
    },
    {
      prop: 'amount2',
      label: 'Amount 2'
    },
    {
      prop: 'amount3',
      label: 'Amount 3'
    },
  ]
}
const tableData = [
  {
    id: '12987122',
    name: 'Tom',
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
  },
  {
    id: '12987123',
    name: 'Tom',
    amount1: '165',
    amount2: '4.43',
    amount3: 12,
  },
  {
    id: '12987124',
    name: 'Tom',
    amount1: '324',
    amount2: '1.9',
    amount3: 9,
  },
  {
    id: '12987125',
    name: 'Tom',
    amount1: '621',
    amount2: '2.2',
    amount3: 17,
  },
  {
    id: '12987126',
    name: 'Tom',
    amount1: '539',
    amount2: '4.1',
    amount3: 15,
  },
]
</script>
