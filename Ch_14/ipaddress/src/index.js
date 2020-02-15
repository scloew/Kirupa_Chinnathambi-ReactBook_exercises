import React from 'react';
import ReactDom from 'react-dom';
import './index.css'
import IPAddressContainer from './IPAddressContainer';

var destination = document.querySelector('#container');

ReactDom.render(
  <div>
    <IPAddressContainer />
  </div>,
  destination
)