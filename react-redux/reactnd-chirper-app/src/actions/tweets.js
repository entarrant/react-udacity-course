import { saveLikeToggle, saveTweet } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";
export const ADD_TWEET = "ADD_TWEET";

export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets
  };
}

function toggleTweet({ id, authUser, hasLiked }) {
  return {
    type: TOGGLE_TWEET,
    id,
    authUser,
    hasLiked
  };
}

function addTweet(tweet) {
  return {
    type: ADD_TWEET,
    tweet
  };
}

export function handleToggleTweet(tweetInfo) {
  return dispatch => {
    dispatch(toggleTweet(tweetInfo));

    return saveLikeToggle(tweetInfo).catch(e => {
      console.warn(`Could not toggle tweet ${tweetInfo.id}: ${e}`);
      dispatch(toggleTweet(tweetInfo));
      alert("There was an error toggling the tweet. Please try again.");
    });
  };
}

export function handleAddTweet(text, replyingTo) {
  return (dispatch, getState) => {
    const { authUser } = getState();

    dispatch(showLoading());

    return saveTweet({ text, author: authUser, replyingTo }).then(tweet => {
      dispatch(addTweet(tweet)).then(dispatch(hideLoading()));
    });
  };
}
