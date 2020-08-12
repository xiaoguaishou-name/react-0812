import React, { Component } from 'react'
import Son from './Son'
export default class App extends Component {
  state = {
    mas: '难受',
    num: 1,
    obj: {
      name:'zwj'
    }
  }
  handle = () => {
    const obj = { ...this.state.obj }
    obj.name = 'yg'
    this.setState({
      obj
    })
  }
  render() {
    return (
      <>
        {this.state.obj.name}
        <Son num={this.state.num}></Son>
        <button onClick={this.handle}>按钮</button>
      </>
    )
  }
}





