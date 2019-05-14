import React, { Component } from "react";
import { connect } from "react-redux";
import { formatTweet } from "../utils/helpers";

class Tweet extends Component {
  render() {
    const { tweet } = this.props;

    if (tweet === null) {
      return <p>This tweet does not exist!</p>;
    }

    return (
      <div className="tweet">
        <h3>Tweet {tweet.id}</h3>
      </div>
    );
  }
}

function mapStateToProps({ authUser, users, tweets }, { id }) {
  const tweet = tweets[id];
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null;

  return {
    authUser,
    tweet: tweet
      ? formatTweet(tweet, users[tweet.author], authUser, parentTweet)
      : null
  };
}

export default connect(mapStateToProps)(Tweet);
