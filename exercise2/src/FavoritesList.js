import React, { Component } from "react";
import MovieStats from "./MovieStats";

class FavoritesList extends Component {
  render() {
    const { movies, profiles, users } = this.props;

    return (
      <div className="favorites-list">
        {Object.values(movies).map(movie => (
          <div key={movie.id}>
            <MovieStats movie={movie} profiles={profiles} users={users} />
          </div>
        ))}
      </div>
    );
  }
}

export default FavoritesList;
