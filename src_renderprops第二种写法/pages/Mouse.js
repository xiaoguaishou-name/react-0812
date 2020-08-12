import React, { Component } from 'react'
import MouseUrl from '../assets/mouse.gif'
export default class Mouse extends Component {
  render() {
    const { x, y } = this.props.state
    return (
      <div>
        <img src={MouseUrl} style={{position:'absolute',left:x,top:y,width:100}}/>
      </div>
    )
  }
}
