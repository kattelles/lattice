import React, { Component } from 'react';

class Movie extends Component {
  render() {
    let imageUrl = 'https://image.tmdb.org/t/p/w500/';
    let movie = this.props.movie;
    let poster = imageUrl + movie.poster_path;
    return (
      <div className="movie">
        <div className="movie-left">
          <img className="poster" src={poster} alt={movie.title}/>
        </div>
        <div className="movie-right">
          <div>{movie.title}</div>
          <div>{movie.popularity}</div>
          <div>{movie.release_date}</div>
        </div>
      </div>
    );
  }
}

export default Movie;
