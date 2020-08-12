import React, { Component } from 'react'

export default class App extends Component {
  state = {
    count: 0,
    msg:''
  }
  handle = () => {
    //1.
    // 注意: 如果连续调用setState. 会导致setState合并. 合并过程中.如果有相同属性,会执行最后一个属性赋值的内容
    // this.setState({
    //   msg: '嘿嘿',
    //   count:this.state.count + 1
    // })
    //  this.setState({
    //    msg: '哈哈',
    //    count: this.state.count + 2
    //  })
    //  this.setState({
    //    msg: '哦哦',
    //    count: this.state.count + 3
    //  })
    //2.
    // 假设: 我们希望多次调用setState.每一次数据计算都是根据上一次计算的结果
    // this.setState((state, props) => {
    //   return {
    //     count:state.count + 1
    //   }
    // })
    // this.setState((state, props) => {
    //   return {
    //     count:state.count + 2
    //   }
    // })
    // this.setState((state, props) => {
    //   return {
    //     count: state.count + 3
    //   }
    // })
    //3.
    // this.setState({
    //   count:this.state.count + 1   //1
    // })
    // console.log(this.state.count)  //0
     //注意: setState之后,并不能立刻拿到修改之后的数据
    //4.
    this.setState({
      count: this.state.count + 1
    },
      () => {
        // 数据更新完成,视图渲染完成触发
        console.log(this.state.count)
        console.log(document.getElementById('box'))
    })
  }
  render() {
    return (
      <div>
        <h1>setState需要注意的问题</h1>
        <div id='box'>{this.state.count}</div>
        <button onClick={this.handle}>按钮</button>
      </div>
    )
  }
}



