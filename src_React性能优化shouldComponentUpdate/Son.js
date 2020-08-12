import React, { Component } from 'react'

export default class Son extends Component {
  state = {
    test:''
  }
  shouldComponentUpdate(prevProps, prevState) {
    console.log('999')
    // 之前的数据: prevProps, prevState
    // 新的数据, this.props, this.state
    if (prevProps.num === this.props.num && prevState.test === this.state.test) {
      return false
    } else {
      return true
    }
  }
  handle = () => {
    this.setState({
      test:'111'
    })
  }
  render() {
    console.log(888)
    return (
      <div>
        <button onClick={this.handle}>按钮</button>
      </div>
    )
  }
}
