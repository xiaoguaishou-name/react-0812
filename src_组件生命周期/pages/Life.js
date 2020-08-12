import React, { Component } from 'react'

export default class Life extends Component {
  state = {
    msg:'韩青禹'
  }
  constructor() {
    super()
    console.log('11')
  }
  render() {
    console.log('222')
    return (
      <div onClick={() => {
        this.setState({
          msg:'瘟鸡'
        })
      }}>
        {this.state.msg}
      </div>
    )
  }
}
