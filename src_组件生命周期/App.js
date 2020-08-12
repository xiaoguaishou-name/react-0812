import React, { Component } from 'react'
import Life from './pages/Life'
// 注意: 只有类组件中拥有生命周期钩子函数
export default class App extends Component {
  state = {
    isShow:true
  }
  render() {
    return (
      <div>
        {this.state.isShow && <Life></Life>}
        <button onClick={() => {
          this.setState({
            isShow:false
          })
        }}>按钮</button>
      </div>
    )
  }
}

