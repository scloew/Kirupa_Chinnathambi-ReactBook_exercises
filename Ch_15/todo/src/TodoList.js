import React, { Component } from 'react';
import TodoItems from './todoItems';

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    var itemArray = this.state.items;
    //temp array isn't actually necessary;
    //can use prev state: see
    // https://forum.kirupa.com/t/building-a-simple-todo-list-app-in-react/636214/53
    if (this._inputElement) {
      itemArray.unshift({
        text: this._inputElement.value,
        key: Date.now()
      });
      this.setState({
        items: itemArray
      });
      this._inputElement = '';
    }
    console.log(itemArray);
    e.preventDefault();
  }

  render() {
    return (
      <div className='todoListMain'>
        <div className='header'>
          <form onSubmit={this.addItem}>
            <input
              ref={(a) => this._inputElement = a}
              placeholder='enter task' />
            <button type='submit'>add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} />
      </div>
    );
  }
}