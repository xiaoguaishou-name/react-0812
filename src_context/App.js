
import React, { Component } from 'react'
import List from './pages/List'
import context from'./pages/context'
export default class App extends Component {
  render() {
    return (
      <context.Provider value={'pink'}>
      <div>
        <List></List>
        </div>
      </context.Provider>
    )
  }
}
