import React, { Component } from "react";

class UserFavorite extends Component {
  render() {
    const { profile, movies, users } = this.props;
    const user = users[profile.userID];
    const movie = movies[profile.favoriteMovieID];

    return(
      <p>{user.name}'s favorite movie is {movie.name}</p>
    );
  }
}

export default UserFavorite;
