import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from './logo-red.png'

const Header = ({toggleHighlighted}) => {

  return (
    <header>
      <h1><NavLink to='/'>Stanky Pomodoros</NavLink></h1>
      <img className='logo' src={logo} />
>>>>>>> e59bf0b3b6f70adf37db071f1a3e8605b8645a70
      <button>🍔</button>
    </header>
  )
}

export default Header;
