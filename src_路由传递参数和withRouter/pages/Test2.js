import React, { Component } from 'react'
// 想要在一个非Route渲染的组件中获取history等对象.可以使用react-router中提供的withRouter函数
import { withRouter } from 'react-router-dom'
// @withRouter
 class Test2 extends Component {
  render() {
    //  注意: 这个Test2组件,不是被Route渲染的. 所以拿不到history,location和match
    // 但是未来开发时,肯定会有需要要获取到这个对象
    console.log(this.props)
    return (
      <div>
        test2
      </div>
    )
  }
}
const WithTest2 = withRouter(Test2)

export default WithTest2

// export default Test2
