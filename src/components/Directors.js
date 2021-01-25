import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const directorsList = directors.map((director, index) => {
    return(
      <div>
        <h3>Name: {director.name}</h3>
        <span>Movies:</span>
        <ul>
          {director.movies.map(movie => {
            return(<li>{movie}</li>)
          })}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {directorsList}
    </div>
  );
}

export default Directors
