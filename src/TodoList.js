import React, { Component } from "react";
import './App.css';
 
class TodoList extends Component {
  createTasks(props) {
    return <li key={props.key}>{props.text}</li>
  }
 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
       
      <ol className="App">
          {listItems}
      </ol>
      
      
    );
  }
};
 
export default TodoList;