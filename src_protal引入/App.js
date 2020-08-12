import React, { Component } from 'react'
function Test() {
  return <h2>test组件</h2>
}
export default class App extends Component {
  render() {
    return (
      <div>
        React
        <p>哈哈</p>
        {
          /* react中组件写在哪,组件中的html结构就会渲染到哪里 */ }
        <Test></Test>
        <span>咳咳</span>
      </div>
    )
  }
}


