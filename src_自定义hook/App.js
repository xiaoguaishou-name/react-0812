import React, { Component } from 'react'
import Mouse from './components/Mouse'
import Cat from './components/Cat'
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>猫抓老鼠</h1>
        <Mouse></Mouse>
        <Cat></Cat>
      </div>
    )
  }
}



