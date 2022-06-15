import { BRAND } from '@/config/constant'

/**
 * @description 在写组件命名或者直接在命名时，我们想在命名的词语前加上一个前缀, 方便全局管理，存在两种模式 1. 驼峰 PAaa  2. 横杆的形式如 p-aaa
 * @param { String } prefix 前缀名字
 * @param { String }  name 定义的名字，未加前缀
 * @param { Boolean }  hump 是否是驼峰
 * @returns {string|boolean} 返回一个新的名字
 * @constructor
 */
export function produceComponentName(name='', hump=true, prefix=BRAND) {
  if(typeof prefix !== 'string' || typeof name !== 'string') return false
  if(hump) { // 驼峰写法
    const _prefix = prefix ? prefix.slice(0,1).toUpperCase() + prefix.slice(1).toLowerCase() : ''
    const _name = name ? name.slice(0,1).toUpperCase() + name.slice(1) : ''
    return _prefix + _name
  } else { // 横杠写法 如 p-aaa
    return `${prefix.toLowerCase()}-${name.toLowerCase()}`
  }
}