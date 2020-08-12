import React, { Component } from 'react'
import Header from './pages/Header/Header'
import List from './pages/List/List'
import Footer from './pages/Footer/Footer'
import './App.css'
export default class App extends Component {
  state = {
    todos: [
      { id: 1, content: '抽烟', isComplate: false },
      {
        id: 2,
        content: '喝酒',
        isComplate: true
      },
      {
        id: 3,
        content: '烫头',
        isComplate: false
      },
    ]
  }
  // // 用于获取子组件传过来的任务名称
  getTodo = todo => {
    const { todos } = this.state
    // id的逻辑是: 如果todos中长度为0, 则id直接为1. 如果长度大于0, id的值应该是数组中最后一个值的id+1
    const id = todos.length ? todos[todos.length - 1].id + 1 : 1
    // 根据当前任务名称创建一个对象
    const todoObj = { id, content: todo, isComplate: false }
    todos.push(todoObj)
    this.setState({
      todos
    })
  }
  //删除一条任务
  getTodoId = id => {
    const { todos } = this.state
    const newTodos = todos.filter(todo => todo.id !== id)
    this.setState({
      todos:newTodos
    })
  }
  //修改任务是否完成
  getTodoIdUpdate = id => {
    const { todos } = this.state
    // 注意: 现在我们直接修改了todos里面的数据,效果也是没有问题的
    // 但是未来如果项目复杂,并且使用了纯组件这些react提送的组件,有可能发生,数据改变了,但是视图没有重新渲染. 所以react直接建议开发者,不要直接修改状态里面的数据,而是根据状态创建一份新的数据,修改新数据
    const todosArr = [...todos]
    const todo = todosArr.find(todo => todo.id === id)
    todo.isComplate = !todo.isComplate
    this.setState({
      todos:todosArr
    })
  }
  // 全选按钮
  handlerAllCheck = () => {
    const { todos } = this.state
    const isAllComplate = todos.every(todo => todo.isComplate)
    todos.forEach(item => (item.isComplate = !isAllComplate))
    const newTodos = [...todos]
    this.setState({
      todos:todos
    })
  }
  //删除已完成任务
  handlerDelAllComplate = () => {
    const { todos } = this.state
    let newTodos = [...todos]
    newTodos = newTodos.filter(todo => !todo.isComplate)
    this.setState({
      todos:newTodos
    })
  }
  render() {
    // 每一次setState数据变化之后,render函数就会执行一次
    const { todos } = this.state
    // 计算完成了几项
    let totalComplate = 0
    todos.forEach(todo => {
      if(todo.isComplate) totalComplate++
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
            totalComplate={totalComplate}
            handlerAllCheck={this.handlerAllCheck}
          handlerDelAllComplate={this.handlerDelAllComplate}></Footer>
        </div>
      </div>
    )
  }
}
