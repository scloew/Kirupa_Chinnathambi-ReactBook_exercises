import React, { Component } from 'react';
import './MenuButton.css';

export default class MenuButton extends Component {
  render() {
    console.log('rendering: menu button');
    return (
      <button id='roundButton'
        onMouseDown={this.props.handleMouseDown} />
    );
  }
}