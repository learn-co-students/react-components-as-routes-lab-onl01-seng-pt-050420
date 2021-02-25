import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        {/*{code here}*/} 
        <h1>Movies Page</h1>
        {movies.map((movie) => (
        <div>
        <h4>{movie.title}</h4>
        <h5>Time:{movie.time}</h5>
        <h6>Genres</h6>
        <ul>
          {movie.genres.map((genre) => (
          <li>{genre}</li>))}
        </ul>
        </div>
        ))}
      
    </div>
  );
};

export default Movies;
