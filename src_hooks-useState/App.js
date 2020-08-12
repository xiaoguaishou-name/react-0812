import React, { useState } from 'react'

export default function App () {
  let [count, setCount] = useState(0)
  let [msg,setMsg] = useState('哈哈')
  function handle() {
    setCount(count + 1)
    setMsg('嘿嘿')
  }
    return (
      <div>
        <div>{count}</div>
        <div>{msg}</div>
        <button onClick={handle}>按钮</button>
      </div>
    )
}

