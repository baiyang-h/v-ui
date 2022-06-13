<template>
  <div class="box">
    <h2>表尾合计行</h2>
    <p class="desc1">若表格展示的是各类数字，可以在表尾显示各列的合计。</p>
    <p class="desc2">将 show-summary 设置为true就会在表格尾部展示合计行。 默认情况下，对于合计行，第一列不进行数据求合操作，而是显示「合计」二字（可通过sum-text配置），其余列会将本列所有数值进行求合操作，并显示出来。 当然，你也可以定义自己的合计逻辑。 使用 summary-method 并传入一个方法，返回一个数组，这个数组中的各项就会显示在合计行的各列中， 具体可以参考本例中的第二个表格。</p>
    <div>
      <pack-table
        :data="tableData"
        :option="option"
      />
      <br />
      <pack-table
        :data="tableData"
        :option="option2"
      />
    </div>
  </div>
</template>

<script setup>

const getSummaries = (param) => {
  const { columns, data } = param
  const sums = []
  columns.forEach((column, index) => {
    if (index === 0) {
      sums[index] = 'Total Cost'
      return
    }
    const values = data.map((item) => Number(item[column.property]))
    if (!values.every((value) => Number.isNaN(value))) {
      sums[index] = `$ ${values.reduce((prev, curr) => {
        const value = Number(curr)
        if (!Number.isNaN(value)) {
          return prev + curr
        } else {
          return prev
        }
      }, 0)}`
    } else {
      sums[index] = 'N/A'
    }
  })
  return sums
}

const option = {
  border: true,
  showSummary: true,
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
      label: 'Cost 1 ($)'
    },
    {
      prop: 'amount2',
      label: 'Cost 2 ($)'
    },
    {
      prop: 'amount3',
      label: 'Cost 3 ($)'
    },
  ]
}
const option2 = {
  border: true,
  showSummary: true,
  summaryMethod: getSummaries,
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
      label: 'Cost 1 ($)'
    },
    {
      prop: 'amount2',
      label: 'Cost 2 ($)'
    },
    {
      prop: 'amount3',
      label: 'Cost 3 ($)'
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
