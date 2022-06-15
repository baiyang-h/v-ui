<template>
  <div class="box">
    <h2>多级表头</h2>
    <p class="desc1">数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。</p>
    <p class="desc2">只要在配置中添加children层级嵌套即可</p>
    <div>
      <p-table
        :data="tableData"
        :option="option"
      />
    </div>
  </div>
</template>

<script setup>
const option = {
  columns: [
    {
      prop: 'date',
      label: 'date'
    },
    {
      label: 'Delivery Info',
      children: [
        {
          prop: 'name',
          label: 'Name'
        },
        {
          label: 'Address Info',
          children: [
            {
              prop: 'state',
              label: 'State'
            },
            {
              prop: 'city',
              label: 'City'
            },
            {
              prop: 'address',
              label: 'Address'
            },
            {
              prop: 'zip',
              label: 'Zip'
            },
          ]
        }
      ]
    }
  ]
}
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
]
</script>
