import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <NavLink to='/filmfindr'>FilmFindr</NavLink>
      <NavLink to='/matchmaker'>MatchMaker</NavLink>
      <NavLink to='/randomizer'>Randomizer</NavLink>
    </nav>
  )
}

export default Nav;
