import React, { Component } from 'react'

export default class Count extends Component {
  // 利用es7新的特性,直接给组件实例添加属性
  state = {
    count:1
  }
  // 这是es7中的新的语法. 由于我们项目中配置了babel所以可以放心使用
  // 这个handler就会直接添加到当前组件的实例身上
  handler = () => {
    this.setState({
      count:this.state.count + 1
    })
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

}

