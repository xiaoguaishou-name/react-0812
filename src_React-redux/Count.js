import React, { Component } from 'react'
import {connect} from 'react-redux'
class Count extends Component {
  handle = () => {
    this.props.dispatch({type:'DIANJIJIAYI'})
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
// // 这个函数的作用: 就是将redux里面的state的数据,映射到需要redux数据的组件中.组件通过props获取
function mapStateToProps(state) {
  // //这个函数接收的state,就是redux中的state的最新的数据
  return {
    count: state
  }
}
// 注意:如果第一次调用什么都不传,Count中只能通过this.props拿到一个dispatch方法
// 如果第一次调用,传了一个参数: 这个参数应该是一个函数,这个时候,Count就可以拿到redux中的数据了
const withCount = connect(mapStateToProps)(Count)
export default withCount