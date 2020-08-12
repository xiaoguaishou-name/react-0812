import React, { Component } from 'react'
import Detail from './Detail'
import {Route} from 'react-router-dom'
export default class Message extends Component {
  handle = num => e => {
    e.preventDefault();
    this.props.history.push('/home/message/'+num)
  }
  pushHandle = num => () => {
    this.props.history.push('/home/message/'+num)
  }
  replaceHandle = num => () => {
    this.props.history.replace('/home/message/'+num)
  }
  render() {
    return (
     <div>
        <ul>
          <li>
            <a href='/home/message/1' onClick={this.handle(1)}>
              message001
            </a>
          </li>
          <li>
            <a href='/home/message/2' onClick={this.handle(2)}>
              message002
            </a>
          </li>
          <li>
            <a href='/home/message/3' onClick={this.handle(3)}>
              message003
            </a>
          </li>
        </ul>
        <button onClick={this.pushHandle(1)}>添加</button>
        <button onClick={this.replaceHandle(2)}>替换</button>
        <Route path='/home/message/:id' component={Detail}></Route>
      </div>
    )
  }
}
