import React, { Component } from 'react'
import Item from '../Item'

import './index.css'
export default class List extends Component {
  render() {
    // let todos = this.props.todos
    let { todos } = this.props

    return (
      <ul className='todo-main'>
        {/* <Item></Item>
        <Item></Item> */}
        {todos.map(todo => (
          <Item key={todo.id} todo={todo} todoId={todo.id} getTodoID={this.props.getTodoID}getTodoIdUpdate={this.props.getTodoIdUpdate}></Item>
        ))}
      </ul>
    )
  }
}
