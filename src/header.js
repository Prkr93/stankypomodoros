import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from './logo-red.png'

const Header = ({toggleHighlighted}) => {

  return (
    <header>
      <h1><NavLink to='/'>Stanky Pomodoros</NavLink></h1>
      <img className='logo' src={logo} />
      <button>🍔</button>
    </header>
  )
}

export default Header;
