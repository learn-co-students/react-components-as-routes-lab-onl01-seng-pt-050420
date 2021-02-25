import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      {/*{code here}*/} 
      <h1>Actors Page</h1> 
      {actors.map( (actor) => ( 
      <div> 
      <h4>Actor:{actor.name}</h4>
      <h5>Movies</h5> 
      <ul> {actor.movies.map( (movie) => (<li>{movie}</li> ))} </ul>
      </div>
      ))}

    </div>
  );
};
 
export default Actors;
