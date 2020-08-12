import React, { Component } from 'react'
import context from './context'
//Link组件做的事情
//1.渲染一个a标签
//2.修改地址栏的路径
//<Link to=""></Link>
export default class Link extends Component {
  static contextType = context
  handle = e => {
    e.preventDefault();
    //修改路径并且阻止a的默认行为
    //通过this.context获取到了provider传过来的对象
    this.context.history.push(this.props.to)
  }
  render() {
    return (
      <a href="" onClick={this.handle}>{this.props.children}</a>
    )
  }
}
