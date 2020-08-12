import React, { Component } from 'react'
import './Item.css'
export default class Item extends Component {
  state = {
    isShowDel:false
  }
  // // 鼠标移入到li里面的事件处理函数
  handlerEnter = () => {
    this.setState({
      isShowDel:true
    })
  }
  // 鼠标移出到li里面的事件处理函数
  handlerLeave = () => {
    this.setState({
      isShowDel:false
    })
  }
  // 删除一条任务的事件处理函数
  handlerDel = id => () => {
    // 将要删除的那条任务的id,传递给app
    const { getTodoId } = this.props
    getTodoId(id)
  }
  //点击修改按钮勾选状态
  handlerChange = id => () => {
    const { getTodoIdUpdate } = this.props
    getTodoIdUpdate(id)
  }
  render() {
    const { todo } = this.props
    const {isShowDel} = this.state
    return (
       <li onMouseEnter={this.handlerEnter} onMouseLeave={this.handlerLeave}>
        <label>
          <input type='checkbox'
            checked={todo.isDone} 
          onChange={this.handlerChange(todo.id)} />
          <span>{todo.content}</span>
        </label>
        <button className='btn btn-danger'
          style={{ display: isShowDel?'block':'none' }}
        onClick={this.handlerDel(todo.id)}>
          删除
        </button>
      </li>
    )
  }
}

