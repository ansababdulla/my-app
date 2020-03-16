import React,{Component} from 'react';
import TodoList from './TodoList';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
        items: []
    };
    this.addItem=this.addItem.bind(this);
}
addItem(event) {
  if (this._inputElement.value !== "") {
    let newDate = new Date()
    var newItem = {
      text: this._inputElement.value+"----"+newDate.getDate()+"/"+newDate.getMonth() + 1+"/"+newDate.getFullYear()+"-"
      +new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds(),
      key: Date.now()
    };
  
 
    this.setState((prevState) => {
      return { 
        items: prevState.items.concat(newItem) 
      };
    });
   
    this._inputElement.value = "";
  }
   
  console.log(this.state.items);
     
  event.preventDefault();
}
  render(){
    return(
      <div className="App">
        <h2>Your Todo App</h2>
        <h4>Enter your Tasks</h4>
      <form onSubmit={this.addItem}>
      <input ref={(a) => this._inputElement= a }></input>
      <br></br>
      <br></br>
      <button type="submit">Add Task</button>
      <TodoList entries={this.state.items}/>
    </form>
    </div>
    );
  }
}
export default App;