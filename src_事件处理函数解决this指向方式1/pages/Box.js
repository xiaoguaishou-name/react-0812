// 注意: 如果定义的是一个函数组件,也要导入React. 因为jsx是语法糖. 最终解析成了React.createElement
import React from 'react'
function Box() {
  return <div>我是一个函数组件</div>
}
export default Box