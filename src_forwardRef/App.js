import React, { Component } from 'react'
function Test(props) {
  return <h2 ref={props.aaa}>test组件</h2>
}
const xxxRef = React.createRef()
export default class App extends Component {
  componentDidMount() {
    console.log(xxxRef.current)
  }
  render() {
    return (
      <div>
        {/* 此处不能写ref属性，不然会报错 */}
        <Test aaa={xxxRef} num={1}></Test>
      </div>
    )
  }
}
/**
 * 注意: 之前学的ref,只是说了ref可以获取dom
 * 现在要知道ref还可以直接获取组件.
 * 结论: 通过ref可以获取到dom元素,也可以获取组件,但是不能再函数组件身上添加ref属性
 * 如果想在函数组件上添加ref属性,可以使用React.forwardRef来实现
 */

// function Test() {
//   return <h2>我是Test组件</h2>
// }

// const Test = React.forwardRef((props, ref) => {
//   // props就是传进来数据, ref就是传进来的ref对象
//   console.log(props, ref)
//   return <h2 ref={ref}>我是Test组件</h2>
// })

