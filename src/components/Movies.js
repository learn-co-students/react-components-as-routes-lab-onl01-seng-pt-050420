import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {
          movies.map(movie => 
            <div>
              <h3>{ movie.title }</h3>
              <ul>
                <li>Time: { movie.time }</li>
                <li>Genres: { movie.genres }</li>
              </ul>
            </div>
          )
        }
    </div>
  );
};

export default Movies;