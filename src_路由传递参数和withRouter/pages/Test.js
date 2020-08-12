import React, { Component } from 'react'

export default class Test extends Component {
  render() {
    // 通过编程式导航第二个参数传递过来的数据,可以通过props.location.state获取
    console.log(this.props.location.state)
    // 获取路由参数: 通过match.params获取
    console.log(this.props.match)
    return (
      <div>
        <h1>编程式导航的第二个参数</h1>
      </div>
    )
  }
}
