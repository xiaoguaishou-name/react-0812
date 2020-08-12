import React, { Component } from 'react'
//导入history
import { createBrowserHistory } from 'history'
//导入context
import context from './context'
//调用方法，得到history对象
const history = createBrowserHistory()
//BrowserRouter要做的事情？
//1.要提供history，location，match给Link，Route
//2.要监听路径是否发生变化
//3.路径发生变化时，让Router组件中所有子节点重新渲染，从而实现路径变化，让每一个Route的pathname和path去一一匹配
export default class BrowserRouter extends Component {
  state = {
    location:'/'
  }
  componentDidMount() {
    //接收到一个取消监听路径变化的函数
    this.unlisten = history.listen(location => {
      //地址栏发生变化时会执行
      console.log(location)
      //调用setState是为了让render函数调用，重新渲染子节点
      this.setState({
        location
      })
    })
  }
  componentWillUnmount() {
    //调用函数，取消监听
    this.unlisten()
  }
  render() {
    //Router组件中，渲染所有子节点
    return <context.Provider value={{ history: history, location: history.location, match: {}}}> {this.props.children} </context.Provider>
  }
}