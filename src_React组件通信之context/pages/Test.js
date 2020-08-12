import React, { Component } from 'react'
import context from './context'
export default class Test extends Component {
  static contextType = context  //第二种方式
  render() {
    return (
      // 第一种方式
      // <context.Consumer>{data =>
      //   <div>
      //   <p style={{ color: data }}>Test组件</p>
      //   </div>}
      //   </context.Consumer>
      <div><p style={{color:this.context}}>哈哈</p></div>
    )
  }
}
