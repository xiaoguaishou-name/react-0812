import React, { Component } from 'react'
import Home from './pages/Home'
import Nav1 from './pages/Nav1'
import Nav2 from './pages/Nav2'
/**
 *  BrowserRouter 只在根组件中使用一次.包裹整个项目
 *
 *  Link 用来修改前端路由 (地址栏的路径),并且底层阻止了a的默认行为
 *
 *  Route 路由组件 使用path和路径进行匹配,如果匹配成功,则展示对应的组件
 *
 */
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <Router>
        <Link to="/home">首页</Link>
        <Link to = "/nav1"> 导航一 </Link>
        <Link to="/nav2"> 导航二 </Link>
        {
          /* react路由,底层在匹配路径的时候,默认使用模糊匹配的方式,导致会出现两次首页 */ } {
          /* 
                  
                    模糊匹配规则: 
                    pathname以path开头就可以匹配到 
                    pathname就是地址栏的路径
                    path就是route组件的path属性的值

                    使用精确匹配
                    精确匹配的匹配规则: 
                    pathname 和 path 必须完全一致

                    如何精确匹配:
                    在Route组件添加exact属性
                    注意: 哪个route添加了exact属性,在匹配的时候就是精确匹配,没写exact的组件,还是模糊匹配

                    注意: 一旦浏览器地址栏路径变化,所有的route都会和路径进行匹配,如果成功就渲染
                  */
        } {
          /* pathname: /home
                      path: / */
        }
        <Route path="/" component={Home} exact></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/nav1" component={Nav1}></Route>
        <Route path="/nav2" component={Nav2}></Route>
      </Router>
    )
  }
}
