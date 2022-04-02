import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from './logo-red.png'

const Header = ({toggleHighlighted}) => {

  const toggleNavBar = (e) => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
    e.target.classList.toggle('active');
  }

  return (
    <header>
      <NavLink to='/' className='title'>
        <img className='logo' src={logo} />
        <h1>Stanky Pomodoros</h1>
      </NavLink>
      <button onClick={toggleNavBar}>🍔</button>
    </header>
  )
}

export default Header;
