import React, { Component } from 'react'
import List from './pages/List/index'
import Search from './pages/Search/index'
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Search></Search>
        <List></List>
      </div>
    )
  }
}




