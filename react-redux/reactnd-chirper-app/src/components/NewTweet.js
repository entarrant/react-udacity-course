import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { handleAddTweet } from "../actions/tweets";

class NewTweet extends Component {
  state = {
    text: "",
    toHome: false
  };

  handleChange = event => {
    const text = event.target.value;

    this.setState({ text: text });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { text } = this.state;
    // id will be null if this is not a reply, and set to a
    // tweet id if it is a reply
    const { dispatch, id } = this.props;

    dispatch(handleAddTweet(text, id));

    this.setState({ text: "", toHome: id ? false : true });
  };

  render() {
    const { text, toHome } = this.state;

    if (toHome) {
      return <Redirect to="/" />;
    }

    const tweetLeft = 280 - text.length;

    return (
      <div>
        <h3 className="center">Compose New Tweet</h3>
        <form className="new-tweet" onSubmit={this.handleSubmit}>
          <textarea
            placeholder="What's happening?"
            value={text}
            onChange={this.handleChange}
            className="textarea"
            maxLength={280}
          />
          {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>}

          <button className="btn" type="submit" disabled={text === ""}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(NewTweet);
