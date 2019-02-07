import React, { Component } from "react";
import "./App.css";
import List from "./Components/List";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ["Uniform", "Shoes", "Books", "Stationeries", "Lunch Box"],
      input: ""
    };
  }
  handleChange = e => {
    this.setState({ input: e.target.value });
  };
  // handleKeyPress = e => {
  //   console.log(e.target.value);
  //   // this.setState({input:e.target.value})
  // };
  keyDown = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      this.handleClick();
    }
  };
  handleClick = () => {
    // console.log(this.state.input);
    if (this.state.input.length !== 0) {
      let newArray = this.state.name.map(name => {
        return name;
      });
      newArray.push(this.state.input);
      this.setState({ name: newArray });
    }
  };
  handleDelete = item => {
    // console.log("Delete Clicked");
    let newName = this.state.name.filter((name, index) => {
      // if (name !== item) return name;
      return (name = index !== item ? name : "");
    });
    this.setState({ name: newName });
  };
  componentDidMount() {
    this.refs.list.focus();
  }
  render() {
    return (
      <div className="container-fluid">
        <h2>Check List</h2>
        <input
          className="add-todo"
          type="text"
          placeholder="Enter the todo to add"
          onChange={this.handleChange}
          ref="list"
          // onKeyPress={this.handleKeyPress}
          onKeyDown={this.keyDown}
        />
        <button className="btn btn-primary" onClick={this.handleClick}>
          Add
        </button>

        <br />
        <List name={this.state.name} delete={this.handleDelete} />
      </div>
    );
  }
}

export default App;
