import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
  render() {
    const {total,totalDone} = this.props
    return (
      <div className='todo-footer'>
        <label>
          <input type='checkbox'
            checked={total === totalDone && total > 0}
            // 因为这次不需要给父组件传递数据,所以将父组件的函数直接当做事件处理函数
            onChange={this.props.handlerAllCheck}/>
        </label>
        <span>
          <span>已完成{totalDone}</span> / 全部{total}
        </span>
        <button className='btn btn-danger' onClick={this.props.handlerDelAllDone}>清除已完成任务</button>
      </div>
    )
  }
}
