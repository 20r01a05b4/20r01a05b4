import React, { Component } from 'react'
import Child from './children'
class Parent extends Component {
  state={
    name:"this is parent"
  }
  render() {
    return (
      <div>
        <h1>form {this.state.name}</h1>
        <Child name={this.state.name}></Child>
      </div>
    )
  }
}
export default Parent