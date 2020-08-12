import React, { Component } from 'react'
import {connect} from 'react-redux'
import { incrementCreator } from './redux/actions'
class Count extends Component {
  handle = () => {
    this.props.dispatch(incrementCreator(2))
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <div>{this.props.count}</div>
        <button onClick={this.handle}>按钮</button>
      </div>
    )
  }
}
// 定义函数
function mapStateToProps(state) {
  return {
    count:state
  }
}
// 调用函数
const withCount = connect(mapStateToProps)(Count)
export default withCount
