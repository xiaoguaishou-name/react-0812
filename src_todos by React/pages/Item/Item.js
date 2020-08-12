import React, { Component } from 'react'
import './Item.css'
export default class Item extends Component {
  state = {
    isShowDel:false
  }
  //鼠标移入显示删除按钮
  handlerEnter = () => {
    this.setState({
      isShowDel:true
    })
  }
  // 鼠标移出隐藏删除按钮
  handlerLeave = () => {
    this.setState({
      isShowDel:false
    })
  }
  handlerChange = id =>() => {
    const { getTodoIdUpdate } = this.props
    getTodoIdUpdate(id)
  }
  // 删除一条任务的事件处理函数
  handlerDel = id => () => {
    const { getTodoId } = this.props
    getTodoId(id)
  }
  render() {
    const { todo } = this.props
    const {isShowDel} = this.state
    return (
       <li onMouseEnter={this.handlerEnter} onMouseLeave={this.handlerLeave}>
        <label>
          <input type='checkbox'
            checked={todo.isComplate}
            onChange={this.handlerChange(todo.id)}/>
          <span>{todo.content}</span>
        </label>
        <button className='btn btn-danger'
          style={{ display: isShowDel ? 'block' : 'none' }}
        onClick={this.handlerDel(todo.id)}>
          删除
        </button>
      </li>
    )
  }
}
