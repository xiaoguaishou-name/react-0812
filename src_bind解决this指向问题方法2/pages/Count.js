import React, { Component } from 'react'

export default class Count extends Component {
  constructor() {
    super()
    this.state = {
      count: 1,
      msg:'虞书欣'
    }
     // 赋值运算符前面的 this.handler就是给当前组件实例身上添加handler属性
     // 赋值运算符后面的 this.handler 就是找到原型上的handler方法
    this.handler = this.handler.bind(this)
  }
  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <div>{this.state.msg}</div>
        <button onClick={this.handler}>点击增加</button>
      </div>
    )
  }
  handler() {
    this.setState({
      count:this.state.count + 1
    })
  }
}

