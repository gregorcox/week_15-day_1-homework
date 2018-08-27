import React from 'react';

const Movie = function (props) {
  return (
    <li>
      <p>{props.children}</p>
    </li>
  );
}


 export default Movie;
