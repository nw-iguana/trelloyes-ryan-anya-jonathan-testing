import React, { Component } from 'react';
import './List.css';

export class List extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.key}</h1>
        <h1>{this.props.header}</h1>
        <h1>{this.props.cards}</h1>
      </div>
    )
  }
}

export default List
