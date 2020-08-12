import React, { Component } from 'react'
import Item from '../Item/Item'
import './List.css'
export default class List extends Component {
  render() {
    const {todos,getTodoId,getTodoIdUpdate} = this.props
    return (
      <ul className='todo-main'>
        {todos.map(todo =>(<Item key={todo.id} todo={todo} getTodoId={getTodoId} getTodoIdUpdate={getTodoIdUpdate}></Item>))}
      </ul>
    )
  }
}
