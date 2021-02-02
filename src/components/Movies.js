import React from 'react';
import { movies } from '../data';



const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => 
      <div>
      <b>{movie.title}</b>
      <p>{movie.time}</p>
      <ul>{movie.genres.map(genre => <li>
        {genre}
      </li>)}</ul>
      </div>)}
    </div>
  );
};

export default Movies;
