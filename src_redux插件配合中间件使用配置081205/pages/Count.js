import React, { Component } from 'react'
export default class Count extends Component {
  handle = () => {
    console.log(this.props)
    // this.props.increment()
    // this.props.incrementCreator(5)
    this.props.incrementCreatorAsync(5)
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

