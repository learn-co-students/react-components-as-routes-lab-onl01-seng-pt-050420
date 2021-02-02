import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  padding: '20px ',
  margin: '0 12px 12px',
  background: 'brown',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (
    <div className="navbar">
     <NavLink to="/" style={link}>Home</NavLink>
     <NavLink to="/movies" exact style={link}>Movies</NavLink>
     <NavLink to="/actors" exact style={link}>Actors</NavLink>
     <NavLink to="/directors" exact style={link}>Directors</NavLink>
    </div>
  );
};

export default NavBar;
