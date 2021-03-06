import React from 'react';
import MovieList from '../components/MovieList';
import '../App.css';

class MovieBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {title: 'Django Unchained', id: 123},
        {title: 'Pulp Fiction', id: 456},
        {title: 'Kill Bill', id: 789},
        {title: 'Resevoir Dogs', id: 101},
        {title: 'Inglorious Basterds', id: 112}

      ]
    };
  }


  render(){
    return (
      <div className="movie-box">
        <MovieList movies={this.state.movies}/>
        <button className="showtimes">Get Showtimes</button>
      </div>
    );
  }
}

export default MovieBox;
