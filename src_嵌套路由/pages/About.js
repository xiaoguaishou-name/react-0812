import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Test from './Test'
import Test2 from './Test2'
export default class About extends Component {
  render() {
    return (
      <div>
        <Link to="/about/test">test</Link>
        <Link to="/about/test2">test2</Link>
        {
          /* 注意: 如果二级路由想展示,要保证一级路由展示才可以 */ }
        <Route path="/about/test" component={Test}></Route>
        <Route path="/about/test2" component={Test2}></Route>
      </div>
    )
  }
}
