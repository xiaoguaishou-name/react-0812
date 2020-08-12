import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink ,Redirect,Switch} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import './App.css'
export default class App extends Component {
  render() {
    console.log('app',this.props)
    return (
      <Router>
        <NavLink to="/home" activeClassName={'selected'}>首页</NavLink>
        <NavLink to="/about" activeClassName={'selected'}>关于</NavLink>
        {
          /* 注意: 只有被Route渲染的组件,才能通过props获取到history */ }
        {/* <Redirect to="/xxx"></Redirect> */}
         {
           /* 重定向组件: 
                     只要这个Redirect执行了,就会实现重定向
                     本质上做的事情: 就是修改了浏览器地址栏路径
                   
                   
                   */
        }
        {
          /* 
                    switch组件: 
                    首先: 所有的Route组件都会和pathname进行匹配,而且如果前面的匹配成功了,也会继续往下匹配
                    如果使用switch. 应该用switch将所有的route包裹起来. 这个时候,如果前面的路由匹配成功了后面的就不去匹配了
                    
                    switch可以提高性能
                  
                  */
        }
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
      </Router>
    )
  }
}

