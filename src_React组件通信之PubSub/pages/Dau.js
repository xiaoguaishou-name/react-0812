import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class Dau extends Component {
  state = {
    msg:''
  }
  // ? 在哪里订阅?
  // 注意: 在组件挂载成功之后,订阅
  componentDidMount() {
    this.token = PubSub.subscribe('TOPIC', (msg, data) => {
      this.setState({
        msg:data
      })
    })
  }
  // 注意: 使用pubsub,挂载的时候,订阅. 卸载的时候,一定要记得取消订阅!!!!
  componentWillUnmount() {
    // 注意: 在组件的生命周期所有的钩子函数中,都可以直接通过this拿到当前组件实例
    PubSub.unsubscribe(this.token)
  }
  render() {
    return (
      <div>
        {this.state.msg}
      </div>
    )
  }
}

