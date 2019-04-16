import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Game from "./Game";

class App extends Component {
  state = {
    numQuestions: 0,
    numCorrect: 0
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <Game updateStats={this.updateStats} />
        </div>
        <p className="text">
          Your Score: {this.state.numCorrect}/{this.state.numQuestions}
        </p>
      </div>
    );
  }

  updateStats = answer => {
    if (answer === true) {
      this.setState(prevState => ({
        numQuestions: prevState.numQuestions + 1,
        numCorrect: prevState.numCorrect + 1
      }));
    } else {
      this.setState(prevState => ({
        numQuestions: prevState.numQuestions + 1
      }));
    }
  };
}

export default App;
