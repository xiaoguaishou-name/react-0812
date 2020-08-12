import React, { Component } from 'react'
import CatUrl from '../assets/dog.gif'
export default class Cat extends Component {
  render() {
    let { x, y } = this.props.state
    x += 200
    y += 50
    return (
      <div>
        <img src={CatUrl} style={{position:'absolute',left:x,top:y,width:100}}></img>
      </div>
    )
  }
}
