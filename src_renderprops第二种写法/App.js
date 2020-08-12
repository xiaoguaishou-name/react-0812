import React, { Component } from 'react'
import Cat from './pages/Cat'
import Mouse from './pages/Mouse'
import Position from './Position'
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>猫抓老鼠</h1>
        <Position>{state => <Mouse state={state}></Mouse>}</Position>
        <Position>{state => <Cat state={state}></Cat>}</Position>
      </div>
    )
  }
}

