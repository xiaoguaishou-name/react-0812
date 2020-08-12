import React, { Component } from 'react'
import withForm from '../withForm'
@withForm
export default class Login extends Component {
  // state = {
  //   username: '',
  //   password: ''
  // }

  // handleChange = name => {
  //   return e => {
  //     this.setState({
  //       [name]: e.target.value
  //     })
  //   }
  // }
  render() {
    const {
      username,
      handleChange,
      password
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
