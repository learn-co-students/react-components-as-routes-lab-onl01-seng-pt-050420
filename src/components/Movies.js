import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => (
          <div>
            {movie.title}
            <br/>
            {movie.time} Minutes
            <br/>
            <ul>
              {movie.genres.map(genre => (
                <li>{genre}</li>
              ))}
            </ul>
            <br/>
            <br/>
          </div>
        ))}
    </div>
  );
};

export default Movies;
