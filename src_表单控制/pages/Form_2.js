import React, { Component } from 'react'

export default class Form extends Component {
  state = {
    text: '默认值',
    desc: '默认值',
    lunch: '佛跳墙',
    checked:true
  }
  //函数柯里化
  handler = name => e => {
    const value = name === 'checked' ? e.target.checked : e.target.value
    this.setState({
      [name]:value
    })
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.text} onChange={this.handler('text')}></input>
        <textarea name="" id="" cols="30" rows="10" value={this.state.desc} onChange={this.handler('desc')}></textarea>
        <select name='' id='' value={this.state.lunch} onChange={this.handler('lunch')}>
          <option value='best'>佛跳墙</option>
          <option value='worse'>方便面 </option>
          <option value='normal'> 猪脚饭</option>
          <option value='bad'>蒸菜 </option>
        </select>
        <input type="checkbox" checked={this.state.checked} onChange={this.handler('checked')} />
      </div>
    )
  }
}
