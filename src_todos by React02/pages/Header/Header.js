import React, { Component } from 'react'
import './Header.css'
export default class Header extends Component {
  state = {
    todo:''
  }
  handlerChange = e => {
    this.setState({
      todo:e.target.value.trim()
    })
  }
  //回车事件
  handlerKeyUp = e => {
    const { getTodo } = this.props
    const { todo } = this.state
    let keyCode = e.keyCode
    if (keyCode === 13 && todo.trim() !== '') {
      //实现添加任务的逻辑
      // 把用户输入的内容,传递给父组件
      getTodo(todo)
    }
    //添加后清空输入框
    this.setState({
      todo:''
    })
  }
  render() {
    return (
      <div className='todo-header'>
        <input type='text'
          placeholder='请输入你的任务名称，按回车键确认'
          value={this.state.todo}
          onChange={this.handlerChange}
          onKeyUp={this.handlerKeyUp}/>
      </div>
    )
  }
}

