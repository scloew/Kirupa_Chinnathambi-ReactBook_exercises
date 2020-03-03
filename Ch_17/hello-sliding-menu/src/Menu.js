import React, { Component } from 'react';
import './Menu.css';

export default class Menu extends Component {
  render() {
    console.log('rendering menu');
    return (
      <div id='flyOutMenu'
        onMouseDown={this.props.handleMouseDown}
        className={this.props.menuVisible ? 'show' : 'hide'}>
        <h2><a href='https://www.linkedin.com/in/stephen-loew-bbbb68138/'>LinkedIn</a></h2>
        <h2><a href='https://github.com/scloew'>Git</a></h2>
        <h2><a href='https://www.facebook.com/pages/category/Pet-Service/Sander-Puppies-1661399234101576/'>PUPPIES!!!!!!</a></h2>
      </div>
    )
  }
}