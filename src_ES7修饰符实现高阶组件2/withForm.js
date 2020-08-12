import React from 'react'
export default function withForm(WrappedComponent) {
  return class extends React.Component{
    state = {
      username: '',
      password: '',
      repassword:''
    }
    handleChange = name => e => {
      this.setState({
        [name]: e.target.value
      })
    }
    render() {
      return <WrappedComponent {...this.state}
      handleChange = {this.handleChange} > </WrappedComponent>
    }
  }
}