import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => { 


    const link = {
      width: '100px',
      padding: '12px',
      margin: '0 6px 6px',
      background: 'blue',
      textDecoration: 'none',
      color: 'white',
    }
    
  return (
    <div className="navbar">
      {/*{code here}*/}  
      <NavLink to="/" exact style={link} activeStyle={{backround: "bluegreen"} } >Home </NavLink> 
      <NavLink exact to="/actors" style={link} activeStyle={{backround: "yellow"}}>Actors</NavLink> 
      <NavLink exact to="/directors" style={link} activeStyle={{backround: "green"}}>Directors</NavLink> 
      <NavLink exact to="/movies" style={link} activeStyle={{backround: "red"}}>Movies</NavLink>
    </div>
  );
};

export default NavBar;
