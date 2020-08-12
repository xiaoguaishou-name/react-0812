import React, { Component } from 'react'
// 从redex包里面导入createStore函数
import { createStore } from 'redux'
// 创建store,将reducer传入到store中
const store = createStore(count)
//定义redecer函数
function count(state = 0, action) {
  switch (action.type) {
    case 'DIANJIJIAYI': return state + 1
    default: return state
  }
}
export default class App extends Component {
  constructor() {
    super()
    //监听state变化
    store.subscribe(() => {
      console.log(store.getState())
    })
  }
  handle = () => {
    store.dispatch({
      type: 'DIANJIJIAYI'
    }) //// 分发action
  }
  render() {
    return (
      <div>
        <button onClick={this.handle}>按钮</button>
      </div>
    )
  }
}
