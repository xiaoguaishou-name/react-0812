import React, { Component } from 'react'
import context from './context'
/*
Route组件要做的事情？
在重新渲染的时候，拿到地址栏的路径，
和自己身上的path属性进行匹配，成功就渲染，否则不渲染
*/
export default class Route extends Component {
  static contextType = context
  render() {
    const pathname = this.context.loaction.pathname
    const path = this.props.path
    const MyComponent = this.props.component
    if (pathname === path) {
      //渲染component属性指向的组件
      return <MyComponent></MyComponent>
    } else {
      //返回null
      return null
    }
  }
}
