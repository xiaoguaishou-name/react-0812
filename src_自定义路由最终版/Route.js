import React, { Component } from 'react'
import context from './context'
/*
Route组件要做的事情？
在重新渲染的时候，拿到地址栏的路径，
和自己身上的path属性进行匹配，成功就渲染，否则不渲染
*/

export default class Route extends Component {
  static contextType = context
  //定义一个函数，用于实现匹配的功能
  //参数：pathname,path
  //返回值：成功返回true，失败返回false
  matchPath = (pathname, path) => {
    //判断exact的值
    const exact = this.props.exact
    if (exact) {
      //能进来是精确匹配
      if (pathname === path) {
        return true
      }
      return false
    } else {
      //否则是模糊匹配
      if (pathname.startsWith(path)) {
        return true
      }
      return false
    }
  }
  render() {
    const pathname = this.context.loaction.pathname
    const path = this.props.path
    const MyComponent = this.props.component
    //调用matchPath方法，进行匹配
    const isMatch = this.matchPath(pathname, path)
    if (isMatch) {
      // return <MyComponent history={this.context.history} location={this.context.location} match={this.context.match}> </MyComponent>
      return <MyComponent>{...this.context}</MyComponent>
    }
    return null 
    // if (pathname === path) {
    //   //渲染component属性指向的组件
    //   return <MyComponent></MyComponent>
    // } else {
    //   //返回null
    //   return null
    // }
  }
}
