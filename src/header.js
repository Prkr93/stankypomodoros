import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = ({toggleHighlighted}) => {

  return (
    <header>
      <h1><NavLink  to='/' onClick={toggleHighlighted} >Stanky Pomodoros</NavLink></h1>
      <button>🍔</button>
    </header>
  )
}

export default Header;
