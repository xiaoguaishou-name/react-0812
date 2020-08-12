import React from 'react'
//  函数中形参要采用大驼峰命名法(因为这个参数接收的是一个组件)(注意：自己踩过的坑)
export default function withForm(Tree) {
  return class extends React.Component{
    state = {
      username: '',
      password: '',
      repassword:''
    }
    handleChange = name => e => {
      this.setState({
        [name]:e.target.value
      })
    }
    render() {
      return <Tree {
        ...this.state
      }
      handleChange = {
        this.handleChange
      } > </Tree>
    }
  }
}