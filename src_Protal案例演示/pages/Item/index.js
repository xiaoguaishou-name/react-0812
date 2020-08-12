import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
  state = {
    isShow: 'none'
  }
  // 每一项任务的复选框change的事件处理函数
  handleChange = () => {
    this.props.getTodoIdUpdate(this.props.todoId)
  }

  // 鼠标移入item的事件处理函数
  handleMouseIn = () => {
    this.setState({
      isShow: 'block'
    })
  }
  handleMouseOut = () => {
    this.setState({
      isShow: 'none'
    })
  }

  // 将要删除的数据的id,传递给app组件
  handleDel = () => {
    // console.log(this.props.todoId)
    this.props.getTodoID(this.props.todoId)
  }
  render() {
    let { todo } = this.props
    return (
      <li onMouseEnter={this.handleMouseIn} onMouseLeave={this.handleMouseOut}>
        <label>
          <input
            type='checkbox'
            checked={todo.isDone}
            onChange={this.handleChange}
          />
          <span>{todo.name}</span>
        </label>
        <button
          className='btn btn-danger'
          style={{ display: this.state.isShow }}
          onClick={this.handleDel}
        >
          删除
        </button>
      </li>
    )
  }
}
