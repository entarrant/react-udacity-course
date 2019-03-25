import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import AddUser from "./AddUser";
import ToggleDisplay from "./ToggleDisplay";
import UserList from "./UserList";

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
    showErrorMessage: false,
    showGamesPlayed: true,
    userList: []
  };

  nameUnique = userName => {
    let unique = true;
    this.state.userList.forEach(user => {
      if (user.userName === userName) {
        unique = false;
      }
    });
    return unique;
  };

  addNewUser = (userName, gamesPlayed) => {
    const unique = this.nameUnique(userName);

    if (unique) {
      this.setState(previousState => ({
        userList: [
          ...previousState.userList,
          { userName: userName, gamesPlayed: gamesPlayed }
        ],
        showErrorMessage: false
      }));
    } else {
      this.setState({ showErrorMessage: true });
    }
  };

  toggleView = () => {
    this.setState(previousState => ({
      showGamesPlayed: !previousState.showGamesPlayed
    }));
  };

  renderError = () => {
    return (
      <p className="error">
        A user with that username already exists. Please try submitting another
        name.
      </p>
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        {this.state.showErrorMessage && this.renderError()}

        <ToggleDisplay
          toggleView={this.toggleView}
          showGamesPlayed={this.state.showGamesPlayed}
        />
        <AddUser addNewUser={this.addNewUser} />
        <UserList
          userList={this.state.userList}
          showGamesPlayed={this.state.showGamesPlayed}
        />
      </div>
    );
  }
}

export default App;
