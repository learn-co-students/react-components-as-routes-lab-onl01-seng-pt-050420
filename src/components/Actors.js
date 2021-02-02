import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => (<div>{actor.name} <li>{actor.movies.map(movie => (<ul>{movie}</ul>))}</li></div>))}
    </div>
  );
};

export default Actors;
