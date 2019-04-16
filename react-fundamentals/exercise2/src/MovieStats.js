import React, { Component } from "react";

class MovieStats extends Component {
  render() {
    const { movie, profiles, users } = this.props;
    const favedProfiles = profiles.filter(
      profile => profile.favoriteMovieID === movie.id.toString()
    );
    let favoritesDisplay;

    if (favedProfiles.length > 0) {
      favoritesDisplay = (
        <div>
          <h3>Liked by:</h3>
          <ol className="faved-profiles">
            {favedProfiles.map(profile => (
              <li key={profile.userID}>{users[profile.userID].name}</li>
            ))}
          </ol>
        </div>
      );
    } else {
      favoritesDisplay = <div>No one has favorited this movie yet</div>;
    }

    return (
      <div>
        <h2>{movie.name}</h2>
        {favoritesDisplay}
      </div>
    );
  }
}

export default MovieStats;
