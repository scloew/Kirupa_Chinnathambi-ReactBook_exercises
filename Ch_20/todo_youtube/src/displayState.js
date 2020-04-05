import React, { Component } from "react";
import { useSelector } from "react-redux";


export default class StateDisplay extends Component {
  render() {
    //const count = useSelector(state => state.counter.count)
    //TODO why can't I access store from here?
    return (
      <div>
        test
        <div>Counter: {this.props.count()}</div>
      </div>
    )
  }
}
