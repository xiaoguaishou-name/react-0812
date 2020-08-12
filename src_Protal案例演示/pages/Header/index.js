import React, { Component } from 'react'
import './index.css'
export default class Header extends Component {
  state = {
    todoName: ''
  }

  handleChange = e => {
    this.setState({
      todoName: e.target.value.trim()
    })
  }
  addTodo = e => {
    // 问题来了:
    // 1.判断按下的是否是回车键
    if (e.keyCode == 13) {
      // 2.要往数据里面添加新的任务
      // console.log('回车')
      // 将state中searchName传递给app组件.
      this.props.getSearchName(this.state.todoName)
      this.setState({
        todoName: ''
      })
    }
  }
  render() {
    return (
      <div className='todo-header'>
        <input
          type='text'
          placeholder='请输入你的任务名称，按回车键确认'
          value={this.state.todoName}
          onChange={this.handleChange}
          onKeyUp={this.addTodo}
        />
      </div>
    )
  }
}
