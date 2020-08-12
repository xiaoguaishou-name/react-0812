import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'
import {TOPIC} from '../constant'
import './index.css'
export default class List extends Component {
  state = {
    items:[]
  }
  componentDidMount() {
    this.token = PubSub.subscribe(TOPIC, (msg, data) => {
      axios.get('/api/search/users', {
        params: {
          username:data
        }
      }).then(res => {
        this.setState({
          items:res.data.items
        })
      }).catch(err => {
        console.log('失败')
      })
    })
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }
  render() {
    return (
      <div className="row">
        {this.state.items.map(item =>
          (<div className="card" key={item.id}>
            <a target="_blank"><img src={item.avatar_url} style={{ width: 100, height: 100 }}></img>
            </a>
            <p className="card-text">{item.login}</p>
          </div>))}
      </div>
    )
  }
}
