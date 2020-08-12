import React,{useState,useEffect} from 'react'
/**
 *
 * useEffect总结:
 *
 * 1. react包里面提供了useEffect
 * 2. useEffect是模拟了类组件中componentDidMount, componentEDidUpdate, componentWillUnMount
 * 3.
 *    useEffect(()=>{
 *      这个函数体中,模拟的是挂载和更新的
 *
 *      return () => {
 *          这个函数体,模拟的是卸载
 *      }
 *    // 如果没有第二个参数,外层函数体,模拟挂载和更新
 *    // 如果第二个参数是空数组,外层函数体,只模拟挂载
 *    // 如果第二个参数中监听了数据,只有在指定数据发生变化的时候,才会更新.否则只有挂载
 *    },[])
 */
function Test(props) {
  const [msg, setMsg] = useState('msg')
  // const [count, setCount] = useState(0)
  // 模拟生命周期钩子函数
  // react提供的模拟生命周期钩子函数的方法,只模拟三个生命周期
  // componentDidMount, componentWillUnMount, componentDidUpdate

  // 外层的这个回调函数代表 componentDidMount 和componentDidUpdate
  // 注意: 如果给第二个参数添加的是空数组,更新直接不执行了.但是实际开发需求比较复杂.
  // 会有,监听某个数据是否变化,如果变化,也要重新更新的需求
  useEffect(() => {
    console.log('组件挂载了')
    // 里面的这个回调函数,代表componentWillUnMount
    return () => {
      
      console.log('组件卸载了')
    }
    // 注意: 如果给useEffect加上第二个参数,并且是一个空的数组,外层回调函数就只表示挂载
  }, [msg, props.count])
  const handle = () => {
    setMsg('哦哦')
  }
  return <div onClick={handle}>{msg}</div>
}
export default function App() {
  const [count, setCount] = useState(0)
  function handle() {
    setCount(count + 1)
  }
  return (
    <div>
      <Test count={count}></Test>
      <button onClick={handle}>按钮</button>
    </div>
  )
}


