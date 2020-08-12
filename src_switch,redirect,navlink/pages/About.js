import React, { Component } from 'react'

export default class About extends Component {
  handle = () => {
    this.props.history.replace('/bbb')
  }
  render() {
    console.log('about',this.props)
    return (
      <div>
        <button onClick={this.handle}>按钮</button>
      </div>
    )
  }
}
