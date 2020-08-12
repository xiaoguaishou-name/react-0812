import React, { Component } from 'react'
import { createStore } from 'redux'
const store = createStore(count)
function count(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT': return state + 1
    default: return state
  }
}
export default class App extends Component {
  constructor() {
    super()
    store.subscribe(() => {
      console.log(store.getState())
    })
  }
  handle = () => {
    store.dispatch({type:'INCREMENT'})
  }
  render() {
    return (
      <div>
        <button onClick={this.handle}>按钮</button>
      </div>
    )
  }
}


