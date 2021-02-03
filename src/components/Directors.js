import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const dir = directors.map(d =>{
    const mov = d.movies.map(m=>{
      return(
        <li>{m}</li>
      )
    })
    return(
      <div>
        <h2>Name: {d.name}</h2>
        <ul>{mov}</ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {dir}
    </div>
  );
}

export default Directors
