import React, { Component } from 'react'
import Header from './pages/Header/Header'
import List from './pages/List/List'
import Footer from './pages/Footer/Footer'
import './App.css'
export default class App extends Component {
  state = {
    todos: [
      { id: 1, content: '谈恋爱', isDone: false },
      { id: 2, content: '敲代码', isDone: true },
      {id:3,content:'秋叶原',isDone:false}
    ]
  }
  // 用于获取子组件传过来的任务名称
  getTodo = todo => {
    const { todos } = this.state
    const id = todos.length ? todos[todos.length - 1].id + 1 : 1
    const todoObj = {
      id,content:todo,isDone:false
    }
    todos.push(todoObj)
    this.setState({
      todos
    })
  }
  // 删除一条任务
  getTodoId = id => {
    const { todos } = this.state
    const newTodos = todos.filter(todo => todo.id !== id)
    this.setState({
      todos:newTodos
    })
  }
  //点击按钮修改任务完成状态
  getTodoIdUpdate = id => {
    const { todos } = this.state
    const todoArr = [...todos]
    const todo = todoArr.find(todo => todo.id === id)
    todo.isDone = !todo.isDone
    this.setState({
      todos:todoArr
    })
  }
  //全选按钮
  handlerAllCheck = () => {
    const { todos } = this.state
    const isAllDone = todos.every(todo => todo.isDone)
    todos.forEach(item => (item.isDone = !isAllDone))
    const newTodos = [...todos]
    this.setState({
      todos:newTodos
    })
  }
  //删除选中的已完成任务
  handlerDelAllDone = () => {
    const { todos } = this.state
    let newTodos = [...todos]
    newTodos = newTodos.filter(todo => !todo.isDone)
    this.setState({
      todos:newTodos
    })
  }
  render() {
    const { todos } = this.state
    // 计算完成了几项
    let totalDone = 0
    todos.forEach(todo => {
      if(todo.isDone) totalDone++
    })
    // 计算总共有几项
    let total = todos.length
    return (
       <div className='todo-container'>
        <div className='todo-wrap'>
          <Header getTodo={this.getTodo}></Header>
          <List todos={this.state.todos}
            getTodoId={this.getTodoId}
          getTodoIdUpdate={this.getTodoIdUpdate}></List>
          <Footer total={total}
            totalDone={totalDone}
            handlerAllCheck={this.handlerAllCheck}
          handlerDelAllDone={this.handlerDelAllDone}></Footer>
        </div>
      </div>
    )
  }
}
