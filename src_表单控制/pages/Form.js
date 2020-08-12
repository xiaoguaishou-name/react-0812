import React, { Component } from 'react'

export default class Form extends Component {
  state = {
    text: '默认值',
    desc: '默认值',
    lunch:'佛跳墙'
  }
  handler = (e,name) => {
    let value = e.target.value
    this.setState({
      [name]:value
    })
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.text} onChange={e => {
          this.handler(e,'text')
        }}></input>
        <textarea name="" id="" cols="30" rows="10" value={this.state.desc} onChange={e => {
          this.handler(e,'desc')
        }}></textarea>
        <select name='' id='' value={this.state.lunch} onChange={e => {
          this.handler(e,'lunch')
        }}>
          <option value='best'>佛跳墙</option>
          <option value='worse'>方便面 </option>
          <option value='normal'> 猪脚饭</option>
          <option value='bad'>蒸菜 </option>
        </select>
        
      </div>
    )
  }
}
