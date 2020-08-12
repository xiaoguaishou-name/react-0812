import React, { Component } from 'react'

export default class Count extends Component {
  handle = () => {
    // this.props.incrementCreator(2)
    this.props.incrementCreatorAsync(2)
  }
  render() {
    return (
      <div>
        <div>{this.props.count}</div>
        <button onClick={this.handle}>按钮</button>
      </div>
    )
  }
}


