import React from 'react';

const Movie = function (props) {
  return (
    <li>
      <p className="movie-title">{props.children}</p>
    </li>
  );
}


 export default Movie;
