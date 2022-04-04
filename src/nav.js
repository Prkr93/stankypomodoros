import React from 'react';
import {NavLink} from 'react-router-dom';
import {toggleNavBar} from './header'

const Nav = () => {
  return (
    <nav>
      <NavLink onClick={toggleNavBar} to='/under-construction'>FilmFindr</NavLink>
      <NavLink onClick={toggleNavBar} to='/under-construction'>MatchMaker</NavLink>
      <NavLink onClick={toggleNavBar} git status to='/under-construction'>Randomizer</NavLink>
    </nav>
  )
}

export default Nav;
