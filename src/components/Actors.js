import React from 'react';
import { actors } from '../data';

const Actors = () => {
const act = actors.map(actor =>{
  const mov = actor.movies.map(m =>{
    return(
      <li>{m}</li>
    )
  })
  return(
    <div>
      <h2>Name: {actor.name}</h2>
      <ul>{mov}</ul>
    </div>
  )
})


  return (
     <div >
       <h1>Actors Page</h1>
       {act}
      </div>
  );
};

export default Actors;
