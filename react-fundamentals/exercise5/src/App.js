import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    displayText: ""
  };

  updateDisplayText = newText => {
    this.setState({ displayText: newText });
  };

  render() {
    const { displayText } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input
            type="text"
            placeholder="Say Something"
            value={displayText}
            onChange={event => this.updateDisplayText(event.target.value)}
          />
          <p className="echo">Echo:</p>
          <p>{displayText === "" ? "Please start typing!" : displayText}</p>
        </div>
      </div>
    );
  }
}

export default App;
