import React, { Component } from 'react'
//导入Provider
import { Provider } from 'react-redux'
//导入store
import store from './redux/store'
//导入Count组件
import Count from './Count'


export default class App extends Component {
  render() {
    return (
      //注意: provider只写一次
      <Provider store={store}>
        <div>
          <Count></Count>
        </div>
      </Provider>
    )
  }
}

