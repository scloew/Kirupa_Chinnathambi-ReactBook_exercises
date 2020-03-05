import React, { Component } from 'react';

export default class MainComponent extends Component {
  render() {
    return (
      <div>
        <h1>HELLO SPA LIFE</h1>
        <ul className='header'>
          <li><a href='/'>HOME</a></li>
          <li><a href='/'>STUFF</a></li>
          <li><a href='/'>MORE STUFF</a></li>
        </ul>
        <div className='content'>
          THE STUFF
        </div>
      </div>
    )
  }
}