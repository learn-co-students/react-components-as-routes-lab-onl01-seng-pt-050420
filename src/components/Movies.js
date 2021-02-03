import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const films  = movies.map(m => {
      const genr = m.genres.map(g =>{
        return(
          <li>{g}</li>
        )
      })
      return(
        <div>
        <h2>Name: {m.title}</h2>  
        <h2>Time: {m.time}</h2>
        <ul>
          {genr}
        </ul>
        </div>
      )
  })
  return (
    <div>
      <h1>Movies Page</h1>
        {films}
    </div>
  );
};

export default Movies;
