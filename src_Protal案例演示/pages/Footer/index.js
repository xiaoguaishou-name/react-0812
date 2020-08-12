import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
  // handleChange = () => {
  //   this.props.upDateAllTodoIsDone()
  // }

  // handleClear = () => {
  //   this.props.clearAllDone()
  // }
  render() {
    let { allCount, doneCount } = this.props
    return (
      <div className='todo-footer'>
        <label>
          <input
            type='checkbox'
            checked={allCount === doneCount}
            onChange={this.props.upDateAllTodoIsDone}
          />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{allCount}
        </span>
        <button className='btn btn-danger' onClick={this.props.clearAllDone}>
          清除已完成任务
        </button>
      </div>
    )
  }
}
