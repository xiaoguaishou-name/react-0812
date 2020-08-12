import React, { Component } from 'react'

export default class Register extends Component {
    // state = {
    //   username: '',
    //   password: '',
    //   repassword: ''
    // }
    // handleChange = name => {
    //   return e => {
    //     this.setState({
    //       [name]: e.target.value
    //     })
    //   }
    // }
  render() {
    const {username,handleChange,password,repassword} = this.props
    return (
      <div>
        <h1>注册</h1>
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
          确认密码:
          <input
            type='password'
            value={repassword}
            onChange={handleChange('repassword')}
          />
          <input type='button' value='登录' />
        </form>
      </div>
    )
  }
}
