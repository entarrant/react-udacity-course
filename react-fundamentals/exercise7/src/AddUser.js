import React from "react";

class AddUser extends React.Component {
  state = {
    userName: "",
    gamesPlayed: 0
  };

  inputIsEmpty = () => {
    return this.state.userName === "";
  };

  handleGamesPlayedChange = event => {
    this.setState({ gamesPlayed: event.target.value });
  };

  handleUserNameChange = event => {
    this.setState({ userName: event.target.value });
  };

  handleAdd = event => {
    event.preventDefault();
    this.props.addNewUser(this.state.userName, this.state.gamesPlayed);
    this.setState({ userName: "", gamesPlayed: 0 });
  };

  render() {
    return (
      <div className="add-user">
        <form onSubmit={this.handleAdd}>
          <input
            type="text"
            placeholder="Enter User Name"
            value={this.state.userName}
            onChange={this.handleUserNameChange}
          />
          <input
            type="number"
            value={this.state.gamesPlayed}
            onChange={this.handleGamesPlayedChange}
          />
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>
      </div>
    );
  }
}

export default AddUser;
