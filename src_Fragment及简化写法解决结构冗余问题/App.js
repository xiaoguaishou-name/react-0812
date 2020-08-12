import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      // <div>
      //   <span>哈哈</span>
      // </div>
      // react组件中只能有一个根组件.

      // 之前使用div包裹的方式会给html结构增加很多无用的层级

      // 1.为了解决这个问题, 可以使用React.Fragment
      // <React.Fragment>
      //   <span>嘿嘿</span>
      // </React.Fragment>
      //2. 简写（推荐使用）
      <> <span>嘻嘻</span></>
    )
  }
}




