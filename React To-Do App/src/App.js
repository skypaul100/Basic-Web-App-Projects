import React from "react";
import logo from "./logo.svg";
import "./App.css";

//this is class component i.e react using class
//Functions uses hooks and class uses Constructor

class App extends React.Component {
  constructor( props)//In react whenevr cons. is called; //props(properties) are used as default; As to read the other components to this file using props
  {
    super(props); // syntax
    this.state = {
      newItem: "", // : not = items here will be pushed to array list
      list: [], //array of list
    };
  }
    
  addItem(todoValue) {
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false,
      };
    const list = [...this.state.list]; //to copy all the elts to list array
    list.push(newItem);

    //Whenever need to update anything inside state
    //never touch directly; do using setstate
    this.setState({
      list,
      newItem: "",
    });
  }
}

  deleteItem(id) {
    const list = [...this.state.list]; // wATch javascript lecture
    const updatedList = list.filter((item) => item.id !== id);
    this.setState({ list: updatedList }); //dont forget to uodate the item
  }

  updateInput(input) {
    this.setState({ newItem: input });
  }
  render() {
    return (
      <div>
        <img src={logo} width="100" height="100" className="logo" />
        <h1 className="app-title">React To-Do App</h1>
        <div className="container">
          <h2>Add an Item...</h2>
          <br />
          <input
            type="text"
            className="input-text"
            placeholder="Write a To-Do"
            required
            value={this.state.newItem}
            onChange={(e) => this.updateInput(e.target.value)}
          />
          <button
            className="add-btn"
            onClick={() => this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length}
          >
            Add To-do
          </button>
          <div className="list">
         
              {this.state.list.map((item) => {
                return (
                  <li key={item.id}>
                    <input
                      type="checkbox"
                      name="isDone"
                      checked={item.isDone}
                      onChange={() => {}}
                    />
                    {item.value}
                    <button
                      className="btn"
                      onclick={() => this.deleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </li>
                );
              })}
              <li>
                <input type="checkbox" name="" id="" />
                Complete the Lectures<button>Delete</button>
              </li>
           
          </div>
        </div>
      </div>
    );
  }
}
export default App;

//This is functional component i.e react using functions
/*function App() {
  return (
  <div className="App">
   <header className="App-header">
    <img src={logo} className="App-logo"/>
     <p>Skywalker is Darth Vader</p>
   </header>
  </div>
  );
}*/
