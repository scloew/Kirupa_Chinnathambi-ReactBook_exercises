import React, { Component } from 'react';
import MenuButton from './MenuButton';
import Menu from './Menu';

export default class MenuContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleMouseDown(e) {
    this.toggleMenu();
    console.log('clicked');
    e.stopPropagation();
    //prevents further propagation of the current event in the capturing and bubbling phases.
    //basically seems to allow for event handling at different levels
    //see ex 5 https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Examples#Example_5:_Event_Propagation
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    })
  }

  render() {
    console.log('rendering: menu container');
    return (
      <div>
        <MenuButton handleMouseDown={this.handleMouseDown} />
        <Menu handleMouseDown={this.handleMouseDown}
          menuVisible={this.state.visible} />
        <div>
          <p> can you spot the item that doesn't belong?</p>
          <li>na</li>
          <li>na</li>
          <li>nana</li>
          <li>Iron Man!</li>
          <li>DO'H</li>
        </div>
      </div>
    );
  }
}