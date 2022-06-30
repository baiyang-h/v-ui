/**
 * @description 旧对象和新对象的合并，通过传入对象属性和值，来修改合并或者新增原对象中的属性和值
 * @param target 目标对象
 * @param source 修改或添加的属性和值
 * @param arrayMerge 是否合并数组
 * @returns {{}|boolean}
 * merge(this.form, {a: 1})
 */
export const merge = (target = {}, source = {}, arrayMerge=false) => {
  if (typeof target !== 'object' || typeof source !== 'object') return false;
  for (var prop in source) {
    // eslint-disable-next-line no-prototype-builtins
    if (!source.hasOwnProperty(prop)) continue;
    if (prop in target) {
      if (typeof target[prop] !== 'object') {
        target[prop] = source[prop]
      } else {
        if (typeof source[prop] !== 'object') {
          target[prop] = source[prop]
        } else {
          if (target[prop].concat && source[prop].concat) { // 都是数组
            // 考虑到我不想合并数组，直接直接赋值，默认直接赋值
            if(arrayMerge) {
              target[prop] = target[prop].concat(source[prop])
            } else {
              target[prop] = source[prop]
            }
          } else { // 都是对象
            target[prop] = merge(target[prop], source[prop])
          }
        }
      }
    } else {
      target[prop] = source[prop]
    }
  }
  return target;
}