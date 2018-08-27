import React from 'react';
import Movie from './Movie';

class MovieList extends React.Component {
  render() {
    const movieComponents = this.props.movies.map((movie) => {
      return (<Movie
        key={movie.id}
        >
          {movie.title}
        </Movie>);
    });
    return (
      <ul>
        UK opening this week
        {movieComponents}
      </ul>
    );
  }
}

export default MovieList;
