import { saveLikeToggle } from "../utils/api";

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";

export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets
  };
}

export function toggleTweet({ id, authUser, hasLiked }) {
  return {
    type: TOGGLE_TWEET,
    id,
    authUser,
    hasLiked
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
