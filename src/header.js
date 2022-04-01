import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from './logo-red.png'

const Header = ({toggleHighlighted}) => {

  return (
    <header>
      <NavLink to='/' className='title'>
        <img className='logo' src={logo} />
        <h1>Stanky Pomodoros</h1>
      </NavLink>
      <button>🍔</button>
    </header>
  )
}

export default Header;
