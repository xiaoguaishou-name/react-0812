import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import List from '../List'
import Modal from '../../components/Modal'

import './index.css'
class Todo extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        name: '吃饭',
        isDone: false
      },
      {
        id: 2,
        name: '睡觉',
        isDone: false
      },
      {
        id: 3,
        name: '打豆豆',
        isDone: true
      }
    ],
    isShowModal: false
  }

  // 要传递给Header组件的函数,用来接收用户输入的任务名.并且添加到todos中
  getSearchName = todoName => {
    // console.log(todoName)
    // 理论上可以直接操作state里面的数据,但是不推荐这样做.比如todos是一个数组,我们希望创建一个新的数据,操作这个新的数据,然后将新数组赋值给state的todos属性
    let arr = [...this.state.todos]

    // 创建id的思路: 如果数组中没有数据,第一条数据的id一定是1. 如果数组中有数据,就获取到最后一项,将最后一项的id + 1.得到新的数据的id
    let id = arr.length > 0 ? arr[arr.length - 1].id + 1 : 1
    arr.push({
      id,
      name: todoName,
      isDone: false
    })

    this.setState({
      todos: arr
    })
  }

  // 获取item传递过来的todoid,并且删除指定todo
  getTodoID = todoId => {
    this.setState({
      isShowModal: true
    })

    // console.log(todoId)
    // let todos = [...this.state.todos]

    // // todos = todos.filter(todo => {
    // //   return todo.id !== todoId
    // // })
    // todos = todos.filter(todo => todo.id !== todoId)

    // // console.log(todos)
    // this.setState({
    //   todos
    // })
  }

  // 获取item传递过来的todoid.并且修改todo的状态
  getTodoIdUpdate = todoId => {
    // console.log(todoId)
    let todos = [...this.state.todos]

    todos.forEach(todo => {
      if (todo.id === todoId) {
        todo.isDone = !todo.isDone
      }
    })

    this.setState({
      todos
    })
  }

  // 全选复选框要触发的事件处理函数
  upDateAllTodoIsDone = () => {
    // 如果todos中有一项没有完成,所以应该让todos所有都完成
    // 如果todos中所有都完成了,所以应该让todos都不完成

    //需要一个判断依据: 是否todos里面都选中了
    // some  数组中有一个符合条件,就返回true
    // every  数组中每一个都符合条件, 才返回true
    let isAllDone = this.state.todos.every(todo => todo.isDone)
    // 如果isAllDone是true,表示都选中,否则就是有未选中项
    let todos = [...this.state.todos]
    // if (isAllDone) {
    //   // 让todos,全部不选中
    //   todos.forEach(todo => (todo.isDone = false))
    // } else {
    //   //让todos,全部选中
    //   todos.forEach(todo => (todo.isDone = true))
    // }
    //简写:
    todos.forEach(todo => (todo.isDone = !isAllDone))

    this.setState({
      todos
    })
  }

  // 删除所有完成项的事件处理函数
  clearAllDone = () => {
    let todos = [...this.state.todos]

    todos = todos.filter(todo => !todo.isDone)

    this.setState({
      todos
    })
  }
  render() {
    //计算当前todos中,完成了多少项, 总共有多少项
    let allCount = this.state.todos.length
    // 把完成项过滤出来,通过length可以获取到长度
    let doneCount = this.state.todos.filter(todo => todo.isDone).length
    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header getSearchName={this.getSearchName}></Header>
          <List
            todos={this.state.todos}
            getTodoID={this.getTodoID}
            getTodoIdUpdate={this.getTodoIdUpdate}
          ></List>
          <Footer
            allCount={allCount}
            doneCount={doneCount}
            upDateAllTodoIsDone={this.upDateAllTodoIsDone}
            clearAllDone={this.clearAllDone}
          ></Footer>
          {this.state.isShowModal && <Modal></Modal>}
        </div>
      </div>
    )
  }
}

export default Todo
