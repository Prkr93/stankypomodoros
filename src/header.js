import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {

  return (
    <header>
      <h1><NavLink to='/'>Stanky Pomodoros</NavLink></h1>
      <button>🍔</button>
    </header>
  )
}

export default Header;
