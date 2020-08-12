import React, { Component } from 'react'
import withForm from '../withForm'
@withForm     //ES7修饰符实现高阶组件
export default class Login extends Component {

  render() {
    const {
      username,
      password,
      handleChange
    } = this.props
    return (
      <div>
        <h1>登录</h1>
        <form>
          用户名:
          <input
            type='text'
            value={username}
            onChange={handleChange('username')}
          />
          <br />
          密码:
          <input
            type='password'
            value={password}
            onChange={handleChange('password')}
          />
          <br />
          <input type='button' value='登录' />
        </form>
      </div>
    )
  }
}
