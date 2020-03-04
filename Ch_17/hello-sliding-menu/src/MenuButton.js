/**
 * Comments denoted to make MenuButton a PureComponent
 * this avoids manually having to check if the components
 * render method needs to be called. Pretty neat-o-burrito
 */

//import React, { Component } from 'react';
import React, { PureComponent } from 'react';
import './MenuButton.css';

//export default class MenuButton extends Component {
export default class MenuButton extends PureComponent {

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.handleMouseDown === this.props.handleMouseDown ?
  //     false : true;
  // }
  //Above code isn't necessary with pure code

  render() {
    console.log('rendering: menu button');
    return (
      <button id='roundButton'
        onMouseDown={this.props.handleMouseDown} />
    );
  }
}