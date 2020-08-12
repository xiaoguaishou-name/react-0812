import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
  render() {
    const {total,totalComplate} = this.props
    return (
      <div className='todo-footer'>
        <label>
          <input type='checkbox'
            checked={total === totalComplate && total > 0}
            onChange = {
              this.props.handlerAllCheck
            }
            />
        </label>
        <span>
          <span>已完成{totalComplate}</span> / 全部{total}
        </span>
        <button className='btn btn-danger' onClick={this.props.handlerDelAllComplate}>清除已完成任务</button>
      </div>
    )
  }
}
