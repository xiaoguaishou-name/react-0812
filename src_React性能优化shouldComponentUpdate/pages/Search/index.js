import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import {TOPIC} from '../constant'
export default class Search extends Component {
  state = {
    username:''
  }
  handle = () => {
    PubSub.publish(TOPIC,this.state.username)
  }
  handleChange = e => {
    this.setState({
      username:e.target.value
    })
  }
  render() {
    return (
      <section className='jumbotron'>
        <h3 className='jumbotron-heading'>Search Github Users</h3>
        <div>
          <input
            type='text'
            placeholder='enter the name you search'
            value={this.state.username}
            onChange={this.handleChange}
          />
          <button onClick={this.handle}>Search</button>
        </div>
      </section>
    )
  }
}
