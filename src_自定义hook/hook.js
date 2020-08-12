import React, { useState, useEffect } from 'react'
// 自定义hook (自定义的一个函数)
// 一般自定义hook都是以useXxxx开头
export default function usePosition() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  useEffect(() => {
    //监听事件
    window.addEventListener('mousemove', handle)
    return () => {
      window.removeEventListener('mousemove',handle)
    }
  })
  function handle(e) {
    setX(e.clientX)
    setY(e.clientY)
  }
  return {x,y}
}