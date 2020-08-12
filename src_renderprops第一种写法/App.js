import React, { Component } from 'react'
import Cat from './components/Cat'
import Mouse from './components/Mouse'
import Position from './Position'
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>肥宅被狗咬</h1>
        <Position render={state => <Mouse state={state}></Mouse>}></Position>
        <Position render={state =><Cat state={state}></Cat>}></Position>
      </div>
    )
  }
}








