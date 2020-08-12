import React, { Component } from 'react'
import Life from './pages/Life'
// 导入context
import context from './pages/context'
export default class App extends Component {
  render() {
    return (
      <context.Provider value={'pink'}>
      <div>
        <p>App根组件</p>
        <Life></Life>
        </div>
        </context.Provider>
    )
  }
}


