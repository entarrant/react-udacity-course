import React from "react";

class ToggleDisplay extends React.Component {
  render() {
    let displayVal;
    if (this.props.showGamesPlayed) {
      displayVal = "Hide Games Played";
    } else {
      displayVal = "Show Games Played";
    }
    return <button onClick={this.props.toggleView}>{displayVal}</button>;
  }
}

export default ToggleDisplay;
