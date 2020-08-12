import React, { Component } from 'react'

export default class Position extends Component {
  state = {
    x: 0,
    y:0
  }
  handleMove = e => {
    this.setState({
      x: e.clientX,
      y:e.clientY
    })
  }
  // 在组件挂载的时候,监听鼠标移动事件
  componentDidMount() {
    window.addEventListener('mousemove',this.handleMove)
  }
  componentWillUnmount() {
    window.removeEventListener('mousemove',this.handleMove)
  }
  render() {
    // 通过this.props.children可以获取到子节点
    return this.props.children(this.state)
  }
}
