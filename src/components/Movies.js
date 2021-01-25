import React from 'react';
import { movies } from '../data';

const Movies = () => {

  let moviesList = movies.map((movie, index) => {
    return(
      <div>
        <h3>Name: {movie.title}</h3>
        <span>Time: {movie.time}</span>
        <br></br><br></br>
        <span>Genres:</span>
        <ul>
          {movie.genres.map((genre) => {
            return(<li>{genre}</li>)
          })}
        </ul>
      </div>
    )
  })

  return (
    <div>
        <h1>Movies Page</h1>
        {moviesList}
    </div>
  );
};

export default Movies;
