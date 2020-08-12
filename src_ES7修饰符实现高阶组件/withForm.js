import React from 'react'
export default function withForm(WrappedComponent) {
  return class extends React.Component{
    // static displayName 是为了让调试工具展示更清晰的组件名
    static displayName = WrappedComponent.name
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
      return (
        <WrappedComponent {...this.state}
          handleChange={this.handleChange}
        {...this.props}></WrappedComponent>
      )
    }
  }
}