import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class Son extends Component {
  state = {
    msg:'我的狗熊很强'
  }
  handle = () => {
    // 将state中的msg的数据,传递个给Dau
    // PubSub.publish('话题', 具体要传递的数据)
    PubSub.publish('TOPIC',this.state.msg)
  }
  render() {
    return (
      <div>
        <button onClick={this.handle}>发布</button>
      </div>
    )
  }
}


