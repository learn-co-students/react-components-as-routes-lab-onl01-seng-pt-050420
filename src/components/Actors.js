import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const actorsList = actors.map((actor, i) => {
    return(
    <div key={i}>
      <h3>Name: {actor.name}</h3>
      <span>Movies:</span>
      <ul>
        {actor.movies.map(movie => {
          return (<li key={i}>{movie}</li>)
        })}
      </ul>
    </div>)
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {actorsList}
    </div>
  );
};

export default Actors;
