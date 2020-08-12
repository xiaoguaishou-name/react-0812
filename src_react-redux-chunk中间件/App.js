
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Count from './container/withCount'
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Count></Count>
        </div>
      </Provider>
    )
  }
}

