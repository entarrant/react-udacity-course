import React from "react";

import User from "./User";

class UserList extends React.Component {
  render() {
    return (
      <div className="user-list">
        <h2>List of Users</h2>
        <ol>
          {this.props.userList.map((user, index) => (
            <User
              key={index}
              user={user}
              showGamesPlayed={this.props.showGamesPlayed}
            />
          ))}
        </ol>
      </div>
    );
  }
}

export default UserList;
