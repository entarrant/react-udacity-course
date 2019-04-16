import React from "react";

class User extends React.Component {
  render() {
    const { user } = this.props;
    let displayText;
    if (this.props.showGamesPlayed) {
      displayText = `${user.userName} played ${user.gamesPlayed} games`;
    } else {
      displayText = user.userName;
    }

    return <li>{displayText}</li>;
  }
}

export default User;
