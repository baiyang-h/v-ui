// 配置文件
export default {
  // 组件布局，子组件名用逗号分隔
  layout: 'total, sizes, prev, pager, next, jumper',
  // 每页显示个数选择器的选项设置
  pageSizes: [20, 50, 100, 150, 200],
  // 展开行 el-table-column 是否固定, 固定位置
  expandFixed: true,  // true / 'left' / 'right'
  // 展开行 el-table-column 的宽度
  expandWidth:60,
  // 复选框
  selectionFixed: true,
  selectionWidth: 50,
  // 序号
  indexFixed: true,
  indexWidth: 50,
  indexLabel: '#'
}