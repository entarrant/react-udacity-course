import React, { Component } from "react";
import UserFavorite from "./UserFavorite";

class FavoritesList extends Component {
  render() {
    return(
      <ol className="favorites-list">
        {this.props.profiles.map(profile =>(
          <li className="favorite-list-item" key={profile.id}>
            <UserFavorite profile={profile} movies={this.props.movies} users={this.props.users} />
          </li>
        ))}
      </ol>
    );
  }
}

export default FavoritesList;
