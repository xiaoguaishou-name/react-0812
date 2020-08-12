import React, { Component } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import withForm from './withForm'
// 返回的也是一个组件,所以也要使用大驼峰命名法(注意：自己踩过的坑)
const WithLogin = withForm(Login)
const WithRegister = withForm(Register)
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>高阶组件</h1>
        <WithLogin></WithLogin>
        <WithRegister></WithRegister>
        {/* <Login></Login>
        <Register></Register> */}
      </div>
    )
  }
}






