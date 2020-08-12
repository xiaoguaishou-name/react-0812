import React, { Component } from 'react'
import context from './context'
export default class Test extends Component {
  static contextType = context
  render() {
    // return (
    //   // <context.Consumer>
    //   //   {data => <div>
    //   //     <p style={{color:data}}>哈哈</p>
    //   //     <button>点击</button>
    //   //   </div>}
    //   // </context.Consumer>(第一种方式)
    
    // )
    // 第二种方法
    return <div><p style={{color:this.context}}>嘿嘿</p></div>
  }
}
