//rcc快速生成类组件
//rfc快速生成函数组件
import React, { Component } from 'react'

export default class Count extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      msg:'叶凡'
    }
  }
  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <div>{this.state.msg}</div>
        <button onClick={()=>{this.handler()}}>点击增加</button>
      </div>
    )
  }
  handler() {
    this.setState({
      count: this.state.count + 1  
    })
    console.log(this)
    // console.log(this.state.count)
    // setTimeout(() => {
    //     console.log(this.state.count)
    // }, 2000);
  }
}
