import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';
import Home from './Home';
import Stuff from './Stuff';
import Contact from './Contacts';

export default class MainComponent extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>HELLO SPA LIFE</h1>
          <ul className='header'>
            <li><NavLink exact to='/'>HOME</NavLink></li>
            <li><NavLink to='/Stuff'>STUFF</NavLink></li>
            <li><NavLink to='/Contacts'>Contacts</NavLink></li>
          </ul>
          <div className='content'>
            <Route exact path='/' component={Home} />
            <Route path='/Stuff' component={Stuff} />
            <Route path='/Contacts' component={Contact} />
          </div>
        </div></HashRouter>
    )
  }
}