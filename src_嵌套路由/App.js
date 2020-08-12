import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink ,Redirect,Switch} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
// import Test from './pages/Test'
// import Test2 from './pages/Test2'
import './App.css'
export default class App extends Component {
  render() {
    // console.log('app',this.props)
    return (
      <Router>
        <NavLink to="/home" activeClassName={'selected'}>首页</NavLink>
        <NavLink to="/about" activeClassName={'selected'}>关于</NavLink>
        <NavLink to="/bbb" activeClassName={'selected'}>test</NavLink>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          {
            /* 在Route组件的path属性里面定义路由参数 */ } {
            /* 如果像下面这种方式去定义路由参数,表示路由参数是必须填写的值 
                      如果不写,就无法匹配成功
                      path = "/bbb/:id/:page"
                    */
          } {
            /*  注意: 如果路由参数后面加了?,表示路由参数是可选的.如果不传,也可以匹配成功 */ }
          {/* <Route path="/bbb/:id?/:page?" component={Test}></Route> */}
        </Switch>
        {/* <Test2></Test2> */}
      </Router>
    )
  }
}

